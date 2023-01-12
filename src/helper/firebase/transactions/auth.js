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
import { userActions } from "../../duck/auth";
import { FirebaseError } from "firebase/app"
import { collection, query, where, addDoc } from "firebase/firestore"

const auth = getAuth(app);

export const handleLogin = dispatch => async(e, email, password, userStatus) => {
    e.preventDefault()
    dispatch(userActions.userLogin)

    try {
        const popup = await signInWithEmailAndPassword(auth, email, password)

        if(popup.user){
            dispatch(userActions.userLoginSuccess({...userStatus, user: popup.user}))
        }
    } catch (error) {
        dispatch(userActions.userLoginFailed(error))
    }


}


export const handleSignup = (dispatch) => async(e, email, password, nickname, userStatus) => {
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