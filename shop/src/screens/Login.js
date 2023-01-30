import React, { useEffect, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userAction'
import Loader from './Loader'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.userLoginReducer);
  const { loading, success } = loginState;
  // const curret=useSelector(state=>state.userLoginReducer);
  // const {currentUser}=curret;

  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user))
    console.log(user)
  }
  useEffect(() => {
    // console.log(currentUser)
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/"
    }


  }, [])


  return (
    <>
      <Container>
        {loading ? <Loader/> : <Form>
          <h1>Login</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"
              value={email} onChange={(e) => { setEmail(e.target.value) }}
              placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
              value={password} onChange={(e) => { setPassword(e.target.value) }}
              placeholder="Password" />
          </Form.Group>

          <Button variant="primary"
            onClick={loginHandler}
          >
            Login
          </Button>
        </Form>}

      </Container>
      {success ? <p>Logged in</p> : <></>}
    </>
  )
}

export default Login