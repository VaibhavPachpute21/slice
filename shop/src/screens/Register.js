import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    const registerHandler=()=>{
        const user={name,email,password};
        console.log(user);
    }

    return (
        <>
            <Container>
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
                        value={password} onChange={(e)=>{setPassword(e.target.value)}}
                         placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"
                        value={cpassword} onChange={(e)=>{setCPassword(e.target.value)}}
                         placeholder="Confirm Password" />
                    </Form.Group>

                    <Button variant="primary" 
                    onClick={registerHandler}
                    >
                        Register
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Register