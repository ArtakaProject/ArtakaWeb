import * as ActionType from '../constants/User';


const INIT_STATE = {
    business_category: "",
    clockin: "",
    employee_id: "",
    employee_name: "",
    fcm_token: "",
    images: [],
    is_online_store_active: "",
    message: "",
    mini_website_url: "",
    outlet_address: "",
    outlet_id: "",
    outlet_name: "",
    outlet_phone: "",
    position: "",
    user_id: "",
    isLoading: false
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
    return {
        ...state,
        business_category: payload.business_category,
        clockin: payload.clockin,
        employee_id: payload.employee_id,
        employee_name: payload.employee_name,
        fcm_token: payload.fcm_token,
        images: [...state.images, payload.images],
        is_online_store_active: payload.is_online_store_active,
        message: payload.message,
        mini_website_url: payload.mini_website_url,
        outlet_address: payload.outlet_address,
        outlet_id: payload.outlet_id,
        outlet_name: payload.outlet_name,
        outlet_phone: payload.outlet_phone,
        position: payload.position,
        user_id: payload.user_id,
        isLoading : true
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