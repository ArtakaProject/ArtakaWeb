import * as ActionType from "../constants/Customer";

const INIT_STATE = {
  customer: [],
  //   id: "",
  //   create_dtm: "",
  //   customer_id: "",
  //   user_id: "",
  //   outlet_id: "",
  //   name: "",
  //   email: "",
  //   phone: "",
  //   datebirth: "",
  //   gender: "",
  //   address: "",
  //   city: "",
  //   province: "",
  //   images: [],
  //   points_balance: 0,
  // }],
  isLoading: false,
  status: false,
  error: null,
  redirect: false,
};

const customerReducer = (state = INIT_STATE, action) => {
  // const { type, payload } = action;

  switch (action.type) {
    case ActionType.GET_CUSTOMER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionType.GET_CUSTOMER_FAILED: {
      return {
        isLoading: false,
        error: action.payload.error,
      };
    }
    case ActionType.GET_CUSTOMER_SUCCEED: {
     return {...state, customer: action.payload,
      isLoading: false,} 

      // return applyGetCustomerSucceed(state, action);
    }

    default:
      return state;
  }
};

/*const applyGetCustomerSucceed = (state, action) => {
  return {
    ...state,
    // id: payload.id,
    // create_dtm: payload.create_dtm,
    // customer_id: payload.customer_id,
    // user_id: payload.user_id,
    // outlet_id: payload.outlet_id,
    // name: payload.name,
    // email: payload.email,
    // phone: payload.phone,
    // datebirth: payload.datebirth,
    // gender: payload.gender,
    // address: payload.address,
    // city: payload.city,
    // province: payload.province,
    // images: [...state.images, payload.province],
    // points_balance: payload.points_balance,
    customer: action.payload,
    isLoading: false,
  };
};*/

export default customerReducer;
