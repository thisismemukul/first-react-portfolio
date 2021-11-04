import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Container } from '@mui/material/';
import { Form, Button, Col, Row, FloatingLabel } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Contact = () => {

    const [state, handleSubmit] = useForm("mbjqvkge");
    if (state.succeeded) {
        return (
            <>
                <section className="text-center mx-auto ">
                    <h3><code>Thanks for approaching!</code></h3>
                    <NavLink exact className="btnLink" to='/home'>Home </NavLink>
                    <NavLink exact className="btnLink" to='/service'>Services</NavLink>
                    <NavLink exact className="btnLink" to='/about'>About</NavLink>
                </section>
            </>
        );
    }

    return (
        <>
            <Container maxWidth="xl">
                <Box>
                    <section className="text-center mx-auto ">
                        <h1> <code>Contact Me</code></h1>
                        <h3><code>Any Question?
                            Drop Me A Line</code></h3>
                    </section>

                    <Form data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000"  onSubmit={handleSubmit} className="mx-auto align-content-center w-75" style={{ color: '#FF0000' }}>
                        <Row className="mb-3">

                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control className="searchbar" type="text" name="name" placeholder="Name" />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className="searchbar" type="email"  name="email" placeholder="Enter email" />
                            </Form.Group>
                        </Row>

                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control className="searchbar"
                                as="textarea"
                                name="message"
                                placeholder="Leave a comment here"
                                style={{ height: '300px' }}
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </FloatingLabel>
                        <br />

                        <Button variant="secondary" type="submit" disabled={state.submitting}>
                            Submit
                        </Button>
                    </Form>
                </Box>
            </Container>
        </>
    )
}

export default Contact;

