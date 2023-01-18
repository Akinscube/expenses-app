import {
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

import app from "..";
import { db } from "..";
import { userActions, userSignOutFailed, userSignOutSuccess } from "../../duck/auth";
import { FirebaseError } from "firebase/app"
import { collection, getDocs, query, where, addDoc } from "firebase/firestore"
import { emptyExpensesSuccess, updateExpensesSuccess } from "../../duck/expenses";
import { sendEmail } from "../../send-grid";
import { updateBudgetSuccess } from "../../duck/budget";

const auth = getAuth(app);


export const handleLogin = (dispatch, navigate) => async(e, email, password, userStatus) => {
    e.preventDefault()
    dispatch(userActions.userLogin)

    try {
        const popup = await signInWithEmailAndPassword(auth, email, password)

        if(popup.user){
            const trx = query(collection(db, "users"), where("uid", "==", popup.user.uid))
            const querySnapshot = await getDocs(trx)
            console.log(querySnapshot)
            let userData = {}
            querySnapshot.forEach(doc => {
                userData = { ...doc.data() }
            })
            console.log(userData.nickname)
            setTimeout(async() =>  {
            dispatch(userActions.userLoginSuccess({...userStatus, user: popup.user, userNickname: userData.nickname}))
        
            const trx = query(collection(db, "Users-Expenses"), where("uid", "==", popup.user.uid))
            const querySnapshot = await getDocs(trx)
            console.log(querySnapshot)
            let userExpenses = []
            querySnapshot.forEach(doc => {
                userExpenses.push({ ...doc.data() })
            })
                dispatch(updateExpensesSuccess(userExpenses))
                await navigate('/dashboard')

            setTimeout(async() => {
                const trx = query(collection(db, "Users-Budgets"), where("uid", "==", popup.user.uid))
                const querySnapshot = await getDocs(trx)
                let userBudget
                querySnapshot.forEach(doc => {
                userBudget = { ...doc.data()}
                })
                if(userBudget) {
                    dispatch(updateBudgetSuccess(userBudget))
                }
                return
            }, 100);
                
            }, 100);
            
        }
    } catch (error) {
        setTimeout(() => {
            dispatch(userActions.userLoginFailed(error))
        }, 100);
        
    }

    

}


export const handleSignup = (dispatch, navigate) => async(e, email, password, nickname, userStatus) => {
    e.preventDefault()
    dispatch(userActions.userRegistration)
    let code = {}
    try {
        // const exeptErr = new FirebaseError(
        //     "firestore/failed-create-user",
        //     `Failed to create the user with the email: '${email}' in the database.`
        //   )
        //   code = { code: exeptErr?.code, message: exeptErr?.message }

          const popup = await createUserWithEmailAndPassword(auth, email, password);

          console.log(popup);
          if(popup.user) {
            dispatch(userActions.userRegistrationSuccess({...userStatus, user: popup.user}))
            await addDoc(collection(db, "users"), {
                uid: popup.user.uid,
                nickname,
                authProvider: "local",
                email
            })
            await sendEmailVerification(popup.user)
            await navigate('/')
            
            return
          }
        //   dispatch(userActions.userRegistrationFailed(code))
        //   throw exeptErr
        
    } catch (error) {
    //     code = { code: error.code }
    //   if (error instanceof FirebaseError) {
    // }
        // console.log(error)

        dispatch(userActions.userRegistrationFailed(error))}
    
}

export const handleSignOut = (dispatch, navigate) =>  async() => {
    try {
        const popup = await signOut(auth)
        dispatch(userSignOutSuccess())
        dispatch(emptyExpensesSuccess())
        await navigate('/')
        return popup
    } catch (error) {
        dispatch(userSignOutFailed(error))
    }
}