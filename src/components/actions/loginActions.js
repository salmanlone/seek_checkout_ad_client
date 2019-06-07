// Set login status
export const setLogout = () => {
    return{
        type: "SET_LOGOUT",
        payload: {
            login: false,
            user: "Login"
        }
    }
}
export const setLogin= (status = false, user = "Login" )=>{
    return{
        type: "SET_LOGIN_STATUS",
        payload: {
            login: status,
            user: user
        }
    }
}