import React, { useEffect } from 'react'
import { getAllPizzas } from '../../actions/pizzaAction'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'


const AllPizzasPage = () => {
  const dispatch = useDispatch()
  const pizzastate = useSelector(state => state.getAllPizzaReducer);
  const { pizzas, loading, error } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [dispatch])

  return (
    <>{
      loading ? <h2>Loading</h2> : error ? <h2>Something went wrong</h2> :
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Image</th>
              <th>Pizza Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead><tbody>
            {pizzas.map((pizza) => (
              <tr>
                <td><img src={pizza.image} width="100px" /></td>
                <td>{pizza.name}</td>
                <td>Small:{pizza.prices[0]['small']} &nbsp;
                  Medium:{pizza.prices[0]['medium']}&nbsp;
                  Large:{pizza.prices[0]['large']}
                </td>
                <td>{pizza.category}</td>
                <td><AiFillEdit /> &nbsp; <AiFillDelete /> </td>
              </tr>
            ))}
          </tbody>

        </Table>
    }

    </>
  )
}

export default AllPizzasPage