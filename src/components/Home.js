import React from "react";
import { Image, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container
        className="d-flex justify-content-md-between flex-md-row justify-content-sm-center flex-sm-column gap-2"
        style={{ backgroundColor: "#EDE6DB" }}
      >
        <Container className="d-flex justify-content-center align-items-center">
          <Image
            src="https://images.unsplash.com/photo-1524563485100-78ae0aa46e5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="fluid p-3"
            style={{ width: "70%" }}
          ></Image>
        </Container>
      </Container>
    </>
  );
};

export default Home;
