import {
    setDoc,
    collection,
    doc,
    query,
    getDocs,
    deleteDoc,
    where,
  } from "firebase/firestore";
  import { updateBudgetSuccess, updateBudgetFailed } from "../../duck/budget";
  import { db } from "..";


  const newBudgetRef = doc(collection(db, "Users-Budgets"))

  const getBudgetTrx = async(uid) =>{
    const trx = query(collection(db, "Users-Budgets"), where("uid", "==", uid))
    const querySnapshot = await getDocs(trx)
    let fetchedBudget
    querySnapshot.forEach(doc => {
    fetchedBudget = { ...doc.data()}
    })
    if(fetchedBudget) {
        return fetchedBudget
    }
  }

  export const handleSaveBudget = dispatch => async(uid, strBudget, budgetType) => {

    const budget = strBudget.replace(/,/g, "")
    try {
        
   
    const trx = query(collection(db, "Users-Budgets"), where("uid", "==", uid))
        const querySnapshot = await getDocs(trx)
        let userBudget
        querySnapshot.forEach(doc => {
            userBudget = { ...doc.data()}
        })
        console.log(userBudget)

        if(!userBudget) {
            const saveBudget = [{date: new Date().toLocaleString("en", {month: "short", year: "numeric"}), budget: budget}]
            await setDoc(newBudgetRef, {
                uid: uid,
                currentBudget: saveBudget,
                budgetRef: newBudgetRef,
                budgetType: budgetType,
                budgetId: newBudgetRef.id
            })
            const fetchedBudget = await getBudgetTrx(uid)
            dispatch(updateBudgetSuccess(fetchedBudget))
            return
        }else {
            const saveBudget = userBudget.budget
            if((saveBudget[saveBudget.length -1]).date === new Date().toLocaleString("en", {month: "short", year: "numeric"}) ) {
                saveBudget.pop()
                saveBudget.push({date: new Date().toLocaleString("en", {month: "short", year: "numeric"}), budget: budget})
                await setDoc(userBudget.budgetId, {
                    currentBudget: saveBudget
                }, { merge: true })
                const fetchedBudget = await getBudgetTrx(uid)
                dispatch(updateBudgetSuccess(fetchedBudget))
                return
            }else {
                if(saveBudget.length -1 === 6){
                    saveBudget.shift();
                    saveBudget.push({date: new Date().toLocaleString("en", {month: "short", year: "numeric"}), budget: budget})
                    await setDoc(userBudget.budgetId, {
                        currentBudget: saveBudget
                    }, { merge: true })
                    const fetchedBudget = await getBudgetTrx(uid)
                    dispatch(updateBudgetSuccess(fetchedBudget))
                    return
                }else {
                    saveBudget.push({date: new Date().toLocaleString("en", {month: "short", year: "numeric"}), budget: budget})
                    await setDoc(userBudget.budgetId, {
                        currentBudget: saveBudget
                    }, { merge: true })
                    const fetchedBudget = await getBudgetTrx(uid)
                    dispatch(updateBudgetSuccess(fetchedBudget))
                    return
                }
            }
            
        }

    } catch (error) {
        console.log(error)
    }
  }