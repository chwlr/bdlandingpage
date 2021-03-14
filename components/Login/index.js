import { Form, Button, Card} from 'react-bootstrap'

export default function LoginTo() {
  return (
    <Card style={{ padding: "20px" }}>
       <h4 className="text-center my-3" style={{ color: "#14213d", fontWeight: 'bold' }}>Login</h4>
      <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn btn-primary btn-block">
            Submit
          </Button>
        </Form>
    </Card>
  )
}