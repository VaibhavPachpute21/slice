import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { registUser } from '../actions/userAction'
import Loader from './Loader'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const dispatch = useDispatch();
    const registerUserState = useSelector((state) => state.userRegisterReducer);
    const { loading, success } = registerUserState;

    const registerHandler = () => {
        const user = { name, email, password };
        dispatch(registUser(user));
        console.log(user);
    }

    return (
        <>
            <Container>
                {loading ? <Loader/> :
                    <Form>
                        <h1>Registration</h1>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"
                                value={name} onChange={(e) => { setName(e.target.value) }}
                                placeholder="Enter name" />
                        </Form.Group>

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

                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password"
                                value={cpassword} onChange={(e) => { setCPassword(e.target.value) }}
                                placeholder="Confirm Password" />
                        </Form.Group>

                        <Button variant="primary"
                            onClick={registerHandler}
                        >
                            Register
                        </Button>
                    </Form>}
            </Container>
            {success ? <h3>Registed User!!</h3> : <></>}
        </>
    )
}

export default Register