import React,{useState} from 'react'
import { Container,Form,Button } from 'react-bootstrap'

const Login = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <>
      <Container>
        <Form>
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

          <Button variant="primary">
            Login
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Login