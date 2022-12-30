import React, { useEffect } from 'react'
import { getAllPizzas } from '../../actions/pizzaAction'
import { useDispatch,useSelector } from 'react-redux'
import Pizza from '../../components/Pizza'
import { Col, Row } from 'react-bootstrap';


const AllPizzasPage = () => {
  const dispatch = useDispatch()
  const pizzastate = useSelector(state => state.getAllPizzaReducer);
  const { pizzas, loading, error } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [dispatch])

  return (
    <>{
      loading ? <h2>Loading</h2> : error ? <h2>Something went wrong</h2> : <Row>
        {pizzas.map((pizza) => (
          <Col md={4} key={pizza.name}>
            <Pizza pizza={pizza} />
          </Col>
        ))}
      </Row>
    }

    </>
  )
}

export default AllPizzasPage