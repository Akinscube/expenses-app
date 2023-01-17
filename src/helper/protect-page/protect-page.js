import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const ProtectPage = ({ children }) => {

    const userStatus = useSelector(state => state.auth.userStatus)
    console.log(userStatus.user)

    if(userStatus.user === null){
        // console.log(Object.keys(userStatus.user).length)
        return <Navigate to='/' />
    }

    if(Object.keys(userStatus.user).length === 0){
        // console.log(Object.keys(userStatus.user).length)
        return <Navigate to='/' />
    }

    return children
}