import axios from 'axios'

export const getAllPizzas = () => async (dispatch) => {
    dispatch({ type: 'GET_PIZZAS_REQUEST' })
    try {
        const res = await axios.get('/api/pizzas/getAllPizzas')
        // console.log(res.data);
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: res.data })
    } catch (err) {
        dispatch({ type: 'GET_PIZZAS_FAIL', payload: err })
    }
}

export const addNewPizza = (pizza) => async (dispatch) => {
    dispatch({type:"ADD_PIZZA_REQ"})
    try {
        const res = await axios.post('/api/pizzas/addNewPizza', pizza)
        dispatch({ type: 'ADD_PIZZA_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'ADD_PIZZA_FAIL', payload: error })

    }


}

// async function getPizzas(){
  //   const res=await axios.get('http://localhost:8080/api/pizzas/getAllPizzas')
  //   console.log(res.data)
  // }
