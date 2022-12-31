export const getAllPizzaReducer = (state = { pizzas: [] }, action) => {
    switch (action.type) {
        case "GET_PIZZAS_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "GET_PIZZAS_SUCCESS":
            return {
                pizzas: action.payload,
                loading: false
            };
        case "GET_PIZZAS_FAIL":
            return {
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export const addNewPizzaReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_PIZZA_REQ":
            return {
                loading: true,
                ...state
            }
        case "ADD_PIZZA_SUCCESS":
            return {
                success: true,
                loading: false
            }
        case "ADD_PIZZA_FAIL":
            return {
                error: action.payload,
                loading: false

            }
        default:
            return state;
    }
}