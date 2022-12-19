import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { getAllPizzaReducer } from './reducers/pizzaReducer'
import { cartReducer } from './reducers/cartReducer'
import { userRegisterReducer } from './reducers/userReducer'
import { userLoginReducer } from './reducers/userReducer'


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('currentUser')) : null
const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer: cartReducer,
    userRegisterReducer: userRegisterReducer,
    userLoginReducer: userLoginReducer
});

const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    userLoginReducer:{
        currentUser:currentUser
    }
};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
