import axios from 'axios'
export const registUser = (user) => async dispatch => {
    dispatch({ type: "REGISTER_USER_REQUEST" })
    try {
        const res = await axios.post('/api/pizzas/register', user)
        dispatch({ type: "REGISTER_USER_SUCCESS" })
    } catch (error) {
        dispatch({ type: "REGISTER_USER_ERROR", payload: error })
    }

}