import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Footer from "./components/Footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar bg="dark" data-bs-theme="dark" className="sticky-top">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <div className="text-align-end">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="">
                Work
                <div className="nav-und"></div>
              </Nav.Link>
              <Nav.Link href="#features" className="">
                About
                <div className="nav-und"></div>
              </Nav.Link>
              <Nav.Link href="#pricing" className="">
                Contact
                <div className="nav-und"></div>
              </Nav.Link>
              <Nav.Link href="#pricing" className="">
                Light
                <div className="nav-und"></div>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
