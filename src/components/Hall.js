import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, Row, Col, Badge, Container, Button } from "react-bootstrap";
import axios from "axios";

const Hall = () => {
  const history = useHistory();
  // const API_URL = "https://hall-bookingapp.herokuapp.com";
    const API_URL = "https://hall-booking-backend-1.onrender.com";

  const [values, setValues] = useState({
    halls: [],
  });
  useEffect(() => {
    const getHalls = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/halls`);
        const response = data.data;
        console.log(response);
        setValues((prevData) => ({ ...prevData, halls: response }));
      } catch (err) {
        console.error(err);
      }
    };
    getHalls();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    history.push(`/bookHall/`);
  };
  const hallsData = values.halls.map((ele, index) => (
    <Col className="mx-auto p-4">
      <Card
        key={index}
        className="g-4 mx-auto"
        style={{ width: "450px", height: "400px" }}
      >
        <Card.Img
          variant="top"
          src={ele.hall_image}
          className="mx-auto"
          style={{ width: "350px", height: "250px" }}
        />
        <Card.Body className="mx-auto">
          <Card.Title style={{ textAlign: "center", color: "crimson" }}>
            {ele.hall_name}
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            <Col>
              <Badge pill bg="success" className="m-1">
                {ele.price}/-
              </Badge>
              <Badge pill bg="success" className="m-1">
                {ele.seats} seats
              </Badge>
              <Badge pill bg="success" className="m-1">
                {ele.status}
              </Badge>
            </Col>
            <Col>
              <Badge pill bg="light" text="dark" className="m-2">
                {ele.amenities.join(" - ")}
              </Badge>
            </Col>
            <Col>
              {ele.status === "available" ? (
                <Button
                  variant="danger"
                  style={{ fontSize: "12px", padding: "2px", height: "30px" }}
                >
                  <Link
                    to={`/book-Hall/${ele._id}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Book Now
                  </Link>
                </Button>
              ) : (
                <Button
                  variant="danger"
                  // onClick={() => handleSubmit(ele._id)}
                  // type="submit"
                  disabled
                  style={{ fontSize: "12px", padding: "2px", height: "30px" }}
                >
                  <Link
                    to={`/book-Hall/${ele._id}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Book Now
                  </Link>
                </Button>
              )}
            </Col>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {hallsData}
      </Row>
    </>
  );
};

export default Hall;
