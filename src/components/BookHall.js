import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  Badge,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookHall = () => {
  // const API_URL = "https://hall-bookingapp.herokuapp.com";
  const API_URL = "https://hall-booking-backend-1.onrender.com";
  const history = useHistory();
  const location = useLocation();
  const hallID = location.pathname.split("/")[2];

  const [values, setValues] = useState({
    hall: [],
    users: [],
    userInfo: "Customer1",
  });
  useEffect(() => {
    const getHall = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/halls/${hallID}`);
        const response = data.data;
        // console.log(response);
        setValues((prevData) => ({ ...prevData, hall: response }));
      } catch (err) {
        console.error(err);
      }
    };
    const getUsers = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/users`);
        const response = data.data;
        // console.log(response);
        setValues((prevData) => ({ ...prevData, users: response }));
      } catch (err) {
        console.error(err);
      }
    };
    getUsers();
    getHall();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      userInfo: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateHall(values);
  };

  const updateHall = async (values) => {
    axios
      .patch(`${API_URL}/halls/${hallID}`, values)
      // axios(config)
      .then((response) => {
        toast.success("Hall updated successfully!");
        // console.log(response);
      })
      .catch(function (error) {
        toast.error(" Check request again!");
      });
    // setTimeout(history.push("/"), 10000);
  };

  const hallsData = (
    <Col className="mx-auto p-4">
      <Card className="g-4 mx-auto" style={{ width: "450px", height: "420px" }}>
        <Card.Img
          variant="top"
          src={values.hall.hall_image}
          className="mx-auto"
          style={{ width: "350px", height: "250px" }}
        />
        <Card.Body className="mx-auto">
          <Card.Title style={{ textAlign: "center", color: "crimson" }}>
            {values.hall.hall_name}
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            <Col>
              <Badge pill bg="success" className="m-1">
                {values.hall.price}/-
              </Badge>
              <Badge pill bg="success" className="m-1">
                {values.hall.seats} seats
              </Badge>
              <Badge pill bg="success" className="m-1">
                {values.hall.status}
              </Badge>
            </Col>
          </Card.Text>
        </Card.Body>
        <Col className="d-flex flex-row justify-content-center align-items-center gap-3 m-2">
          <Form className="d-flex justify-content-center align-items-center flex-column">
            <Form.Group className="m-1">
              <Form.Select
                value={values.userVal}
                onChange={handleChange}
                name="userVal"
                style={{ fontSize: 14, padding: 6, width: "150px" }}
              >
                <option value="Select one">Customer name</option>
                {values.users.map((ele, i) => (
                  <option value={ele._id}>{ele.username}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
          <Button
            variant="danger"
            onClick={handleSubmit}
            type="submit"
            style={{ fontSize: "12px", padding: "2px", height: "30px" }}
          >
            Book Now
          </Button>
        </Col>
      </Card>
    </Col>
  );

  return (
    <>
      <ToastContainer />
      <Row xs={1} md={2} className="g-4">
        {hallsData}
      </Row>
    </>
  );
};

export default BookHall;
