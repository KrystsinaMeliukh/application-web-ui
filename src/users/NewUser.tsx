import React, {FormEvent} from "react";
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";

type Props = {
}

type State = {
    validated: boolean
}

class NewUser extends React.Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);

        this.state = {
            validated:false
        }
    }

    setValidated(validated: boolean) {
        this.setState({
            validated: validated
        })
    }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setValidated(true);
    };

    render() {
        return (
            <main role="main" className="bg-white col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <h2>Add new user</h2>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                    <Row>
                        <h4 className="mb-3">User details</h4>
                    </Row>
                    <Row>
                        <Form.Group as={Col} md="6" controlId="formFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your first name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="formLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter your last name.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formUserName">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formEmail">
                            <Form.Label>
                                {"Email "}
                                <Form.Text className="text-muted">
                                    (Optional)
                                </Form.Text>
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Row>
                    <hr className="my-4"/>
                    <Row>
                        <h4 className="mb-3">Billing address</h4>
                    </Row>
                    <Row>
                        <Form.Group controlId="formBillingAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" required/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid address.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formBillingAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor"/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} md="6" controlId="formBillingCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="formBillingState">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="formBillingZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <hr className="my-4"/>
                    <Row>
                        <Form.Group id="formSameAddressCheckbox">
                            <Form.Check type="checkbox" label="Shipping address is the same as my billing address"/>
                        </Form.Group>
                    </Row>
                    <hr className="my-4"/>
                    <h4 className="mb-3">Shipping address</h4>
                    <hr className="my-4"/>
                    <Button style={{marginBottom: "80px"}} type="submit">Submit form</Button>
                </Form>
            </main>
        );
    }
}

export default NewUser;