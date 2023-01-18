import { createSlice } from "@reduxjs/toolkit";


const initialState = { userStatus: { loading: false, user: {}, userNickname:"", code: ""} }

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
            state.userStatus.userNickname = action.payload.userNickname
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
            state.userStatus.userNickname = ""
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