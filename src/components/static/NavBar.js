import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Home from "./Home";
import About from "./SampleCollection";
import ContactUs from "./Contact";

export class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }

  handleLoginClicked = (e) => {
    this.setState(prevState => {
      return {
        clicked: !prevState.clicked
      }
    })
    
  }

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              SoilCare
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/home">
                    HOME
                  </a>
                  
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">
                    CONTACT US
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/sampleCollection"
                  >
                    SAMPLE COLLECTION
                  </a>
                </li>
  
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/login">
                    <button class="btn btn-outline-success me-2" type="button" onClick={this.handleLoginClicked}>
                      LOGIN
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/sampleCollection" element={<About />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/login" element={<LoginForm clicked={this.state.clicked}  />}></Route>
        </Routes>
      </>
    );
  }
};

