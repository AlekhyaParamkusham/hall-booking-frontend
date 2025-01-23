import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, ButtonGroup } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateCustomer = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    gender: "",
    age: 18,
    contact: "",
  });

  // const API_URL = "https://hall-bookingapp.herokuapp.com";
    const API_URL = "https://hall-booking-backend-1.onrender.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(values);
  };

  const createUser = async (values) => {
    axios
      .post(`${API_URL}/users`, values)
      // axios(config)
      .then((response) => {
        toast.success("Customer created successfully!");
        console.log(response);
        // setTimeout(history.push("/"), 10000);
      })
      .catch(function (error) {
        toast.error(" Check request again!");
      });
    setTimeout(
      setValues({ username: "", email: "", gender: "", age: 18, contact: "" }),
      10000
    );
  };
  return (
    <>
      <ToastContainer />
      <Container className="mx-auto p-4">
        <Container className="d-flex justify-content-center align-items-center flex-column">
          <h3>Please enter new Customer details</h3>
          <Form className="d-flex justify-content-center align-items-center flex-column">
            <Form.Group className="m-3" controlId="username">
              <Form.Control
                type="text"
                htmlSize="50px"
                placeholder="Enter username"
                value={values.username}
                onChange={handleChange}
                name="username"
              />
            </Form.Group>
            <Form.Group className="m-3" controlId="email">
              <Form.Control
                type="email"
                htmlSize="50px"
                placeholder="Enter email ID"
                value={values.email}
                onChange={handleChange}
                name="email"
              />
            </Form.Group>
            <Form.Group className="m-3" controlId="gender">
              <Form.Control
                type="text"
                htmlSize="50px"
                placeholder="Enter gender"
                value={values.gender}
                onChange={handleChange}
                name="gender"
              />
            </Form.Group>
            <Form.Group className="m-3" controlId="age">
              <Form.Control
                type="number"
                htmlSize="50px"
                placeholder="Enter age"
                value={values.age}
                onChange={handleChange}
                name="age"
              />
            </Form.Group>
            <Form.Group className="m-3" controlId="contact">
              <Form.Control
                type="text"
                htmlSize="50px"
                placeholder="Enter contact number"
                value={values.contact}
                onChange={handleChange}
                name="contact"
              />
            </Form.Group>
            <ButtonGroup className="d-flex flex-row gap-2">
              <Button variant="success" onClick={handleSubmit} type="submit">
                Create
              </Button>
              <Button variant="danger" as={Link} to="/">
                Cancel
              </Button>
            </ButtonGroup>
          </Form>
        </Container>
      </Container>
    </>
  );
};

export default CreateCustomer;
