import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap';
import Pizza from '../components/Pizza';
import { getAllPizzas } from '../actions/pizzaAction'

const Home = () => {
  const dispatch = useDispatch()
  const pizzastate = useSelector(state => state.getAllPizzaReducer)
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas())
  }, [dispatch]);

  return (
    <>
      <Container className='mt-5 mb-5'>
        {loading ? (<h1>Loading...</h1>)
          : error ? (<h1>Error while fetching</h1>) :
            <Row>
              {pizzas.map(pizza => (
                <Col md={4}>
                  <Pizza pizza={pizza} />
                </Col>
              ))}
            </Row>
        }
      </Container>
    </>
  )
}

export default Home