import { createSlice } from "@reduxjs/toolkit";


const initialState = { userStatus: { loading: false, user: {}, userNameInput:"", userType: "", code: ""} }

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userRegistration: state => {
            state.userStatus.loading = true
        },
        userRegistrationSuccess: (state, action) => {
            state.userStatus.loading = false
            state.userStatus.user = action.payload.user
            state.userStatus.code = "auth/signup-successful"
        },
        userRegistrationFailed: (state, action) => {
            state.userStatus.loading = false
            state.userStatus.user = null
            state.userStatus.code = action.payload?.code
        },
        userLogin: state => {
            state.userStatus.loading = true
        },
        userLoginSuccess: (state, action) => {
            state.userStatus.loading = false
            state.userStatus.user = action.payload.user
            state.userStatus.userNameInput = action.payload.userNameInput
            state.userStatus.userType = action.payload.userType
            state.userStatus.code = "auth/Login-Successful"
        },
        userLoginFailed: (state, action) => {
            state.userStatus.loading = false
            state.userStatus.user = null
            state.userStatus.code = action.payload?.code
        },
        userSignOutSuccess: state => {
            state.userStatus.loading = false
            state.userStatus.user = null
            state.userStatus.code = "auth/SignOut-Successful"
            state.userStatus.userNameInput = ""
            state.userStatus.userType = ""
        },
        userSignOutFailed: (state, action) => {
            state.userStatus.loading = false
            state.userStatus.user = null
            state.userStatus.code = action.payload?.code
            
        }
        
    }
})

export const {userRegistration, userRegistrationSuccess, userRegistrationFailed, userLogin, userLoginSuccess, userLoginFailed, userSignOutSuccess, userSignOutFailed} = userSlice.actions

export const userActions = userSlice.actions

export default userSlice;