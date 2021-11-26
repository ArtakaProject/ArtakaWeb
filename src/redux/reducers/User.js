import * as ActionType from '../constants/User';


const INIT_STATE = {
    username: "",
    user_firstname: "",
    user_lastname: "",
    email: "",
    user_password: "",
    user_phone: "",
    role_type: '',
    status: false,
    authUser: "JSON.parse(localStorage.getItem('@profile'))",
    profile: {
        userId: undefined,
        username: "",
        email: "",
        roleType: ""
    },
    token: localStorage.getItem('@token'),
    isLogout : false
}

const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.ADD_SIGNUP_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.ADD_SIGNUP_SUCCEED: {
            return applyAddSignupSucceed(state, action)
        }
        case ActionType.GET_SIGNIN_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_SIGNIN_SUCCEED: {
            return applyGetSigninSucceed(state, action)
        }
        case ActionType.GET_SIGNOUT_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_SIGNOUT_SUCCEED: {
            return applyGetSignoutSucceed(state, action)
        }
        case ActionType.SIGNUP_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        default:
            return state;
    }

}

const applyAddSignupSucceed = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        username: payload.user_name,
        email: payload.user_email,
        role_type: payload.user_role_type,
        isLoading: false,
        status: true
    }
}

const applyGetSigninSucceed = (state, action) => {
    const { payload } = action;
    const { profile } = payload
    return {
        ...state,
        profile: {
            userId: profile.userId,
            username: profile.username,
            email: profile.email,
            roleType: profile.roleType
        },
        isLoading: false,
        status: true,
        isLogout : false
    }
}

const applyGetSignoutSucceed = (state, action) => {
    return {
        ...state,
        profile: {
            userId: undefined,
            username: "",
            email: "",
            roleType: ""
        },
        isLoading: false,
        token: "",
        isLogout : true
    }
}


export default userReducer