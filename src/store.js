import { createStore } from "redux";

///initial state

const initialState = {
  username: "",
  password:"",
  cart: [],
  total: 0
};

///actions

export const LOG_IN_USERNAME = "LOG_IN_USERNAME";
export const LOG_IN_PASSWORD = "LOG_IN_PASSWORD";
export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_TOTAL = "INCREASE_TOTAL"

///reducer

function reducer(state = initialState, action) {
    console.log(state)
  switch (action.type) {

    case LOG_IN_USERNAME:
      return { ...state, username: action.payload };

    case LOG_IN_PASSWORD:
      return {...state, password: action.payload}
    
    case ADD_TO_CART:
        const newCart = [...state.cart, action.payload]
        return  {...state, cart: newCart};    

    case INCREASE_TOTAL:
        const newTotal = state.total += action.payload
        return {...state, total: newTotal};    
      
        default:
      return state;
  }
}

export default createStore(reducer)