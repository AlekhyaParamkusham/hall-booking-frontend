import React, { useState, useEffect } from "react";
import { Toast, Badge, Col, Row } from "react-bootstrap";
import axios from "axios";

const Customer = () => {
  const API_URL = "https://hall-bookingapp.herokuapp.com";

  const [values, setValues] = useState({
    users: [],
  });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/users`);
        const response = data.data;
        console.log(response);
        setValues((prevData) => ({ ...prevData, users: response }));
      } catch (err) {
        console.error(err);
      }
    };
    getUsers();
  }, []);

  const usersData = values.users.map((ele, index) => (
    <Col className="mx-auto p-4">
      <Toast className="mx-auto p-4">
        <Toast.Header closeButton={false}>
          <strong className="me-auto">{ele.username}</strong>
          <small>{ele.age}</small>
        </Toast.Header>
        <Toast.Body className="p-2" style={{ textAlign: "center" }}>
          <Badge pill bg="light" text="dark" className="m-2">
            {ele.email}
          </Badge>
          <Badge pill bg="light" text="dark" className="m-2">
            {ele.contact}
          </Badge>
        </Toast.Body>
      </Toast>
    </Col>
  ));

  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {usersData}
      </Row>
    </>
  );
};

export default Customer;
