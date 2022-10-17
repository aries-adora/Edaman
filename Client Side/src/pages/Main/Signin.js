import React, { Component } from 'react'
import { Card, Col, Form, Row, Button } from 'react-bootstrap'

class Signin extends Component {

    constructor() {
      super()
      this.state = {
     /* ADD STATE FOR LOGIN */
      }
    }
    
    login () {
        this.setState({
            /* DO STATE */
        })
    }

    signup () {
        /* FOR SIGN UP */
    }


    render() { 
        return (
        <Card border="light" className="bg-light shadow-sm mb-4">
            <Card.Body>
                <h5 className='mb-5'> Log in your information</h5>
                <Form>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Form.Group>
                                <Form.Label>Username: </Form.Label>
                                <Form.Control required type="text" placeholder="Enter your username" />
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Password: </Form.Label>
                                <Form.Control required type="password" placeholder="Enter your username" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <Button variant="primary" type="submit" onClick={() => this.login()} >Save All</Button>
                        { /* CREATE PAGE AND LINK FOR REGISTRATION */ }
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )};
};

export default Signin;