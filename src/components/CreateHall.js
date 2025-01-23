import React, { useState, useEffect } from "react";
import { Container, Form, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateHall = () => {
  // const API_URL = "https://hall-bookingapp.herokuapp.com";
    const API_URL = "https://hall-booking-backend-1.onrender.com";

  const [values, setValues] = useState({
    hall_name: "",
    hall_image: "",
    category: "Mini parties",
    seats: 0,
    amenities: [],
    price: 0,
  });
  // Array for categories

  const catArr = ["Mini parties", "Conference", "Wedding"];

  // Array for amenities

  const amenitiesArr = [
    "WiFi",
    "Speakers",
    "Mic",
    "Spot Light",
    "DJ",
    "AC",
    "WhiteBoard",
    "Projector",
    "Round Tables",
    "LED Screens",
    "Dance Floor",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createHall(values);
  };

  const createHall = async (values) => {
    axios
      .post(`${API_URL}/halls`, values)
      // axios(config)
      .then((response) => {
        toast.success("Hall created successfully!");
        console.log(response);
        // setTimeout(history.push("/"), 10000);
      })
      .catch(function (error) {
        toast.error(" Check request again!");
      });
    setTimeout(
      setValues({
        hall_name: "",
        hall_image: "",
        category: "Mini parties",
        seats: 0,
        amenities: [],
        price: 0,
      }),
      10000
    );
  };
  return (
    <>
      <ToastContainer />
      <Container className="mx-auto p-4">
        <Container className="d-flex justify-content-center align-items-center flex-column">
          <h3>Create a new Hall</h3>
          <Form className="d-flex justify-content-center align-items-center flex-column">
            <Form.Group className="m-3" controlId="hall_name">
              <Form.Control
                type="text"
                htmlSize="50px"
                placeholder="Enter name"
                value={values.hall_name}
                onChange={handleChange}
                name="hall_name"
              />
            </Form.Group>
            <Form.Group className="m-3" controlId="hall_image">
              <Form.Control
                type="text"
                htmlSize="50px"
                placeholder="Enter image URL"
                value={values.hall_image}
                onChange={handleChange}
                name="hall_image"
              />
            </Form.Group>
            <Form.Group className="m-3" controlId="seats">
              <Form.Select
                value={values.category}
                onChange={handleChange}
                name="category"
                style={{ fontSize: 14, padding: 6, width: "100px" }}
              >
                <option value="Select one">Select One</option>
                {catArr.map((ele, i) => (
                  <option value={ele}>{ele}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="m-3" controlId="seats">
              <Form.Control
                type="number"
                htmlSize="50px"
                placeholder="Enter no.of seats"
                value={values.seats}
                onChange={handleChange}
                name="seats"
              />
            </Form.Group>
            <Form.Group
              className="d-flex flex-row flex-wrap gap-2 align-items-center justify-content-center"
              style={{ width: "200px" }}
              controlId="amenities"
            >
              {amenitiesArr.map((ele, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  name="amenities"
                  value={ele}
                  onChange={handleChange}
                  label={ele}
                  style={{ fontSize: "13px", padding: 6, width: "90px" }}
                />
              ))}
            </Form.Group>
            <Form.Group className="m-3" controlId="price">
              <Form.Control
                type="number"
                htmlSize="50px"
                placeholder="Enter price"
                value={values.price}
                onChange={handleChange}
                name="price"
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

export default CreateHall;
