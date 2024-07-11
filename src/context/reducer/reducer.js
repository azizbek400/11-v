export const initialState = {
    user: null,
    loading: false
}

const reducer = (state, action) => {
    switch(action.type){
        case "REGISTER_USER":
            return {
                user: action.user
            }
        case "LOGIN_USER":
            localStorage.setItem("token", action.tokens.access_token)
            return state
        case "LOADING":
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}

export default reducer