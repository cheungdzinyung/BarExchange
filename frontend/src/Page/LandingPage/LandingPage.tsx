// Importing modules from library
import * as React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

// Importing styling and static assets
// Importing presentation components
import LandingPageHeader from "./Header/LandingPageHeader";
// Importing assisting utility functions
// Importing interfaces from module


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// library.add(fab);

import "./css/bootstrap.min.css";
import "./css/owl.carousel.min.css";
import "./css/style.scss";
import "./css/themify-icons.css";

// import AppleIcon from "./images/appleicon.png";
// import PlayIcon from "./images/playicon.png";
import Logo from "./images/logo.svg";
import MainScreen from "./images/mainscreen.png";

export default class LandingPageNew extends React.Component<
  {},
  { openNavBar: boolean }
  > {
  constructor(props: {}) {
    super(props);

    this.state = {
      openNavBar: false
    };
  }

  public toggleNavBar = () => {
    this.setState({
      openNavBar: !this.state.openNavBar
    });
  };

  public render() {
    return (
      <div
        data-spy="scroll"
        data-target="#navbar"
        data-offset="30"
        className="bg-gradient"
      >
        <div className="nav-menu fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Navbar
                  className={"navbar navbar-dark navbar-expand-lg"}
                  light={true}
                  color="faded"
                >
                  <NavbarBrand className="navbar-brand" href="index.html">
                    <img src={Logo} className="img-fluid" alt="logo" />
                  </NavbarBrand>{" "}
                  <NavbarToggler
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={this.toggleNavBar}
                  >
                    {" "}
                    <span className="navbar-toggler-icon" />{" "}
                  </NavbarToggler>
                  <Collapse
                    isOpen={this.state.openNavBar}
                    className="navbar-collapse"
                    id="navbar"
                    navbar={true}
                  >
                    <Nav className="navbar-nav ml-auto" navbar={true}>
                      <NavItem className="nav-item">
                        {" "}
                        <NavLink
                          className="nav-link"
                          href="#home"
                          onClick={this.toggleNavBar}
                        >
                          HOME <span className="sr-only">(current)</span>
                        </NavLink>{" "}
                      </NavItem>
                      <NavItem className="nav-item">
                        {" "}
                        <NavLink
                          className="nav-link"
                          href="#features"
                          onClick={this.toggleNavBar}
                        >
                          FEATURES
                        </NavLink>{" "}
                      </NavItem>

                      <NavItem className="nav-item">
                        {" "}
                        <NavLink
                          className="nav-link"
                          href="#contact"
                          onClick={this.toggleNavBar}
                        >
                          CONTACT
                        </NavLink>{" "}
                      </NavItem>
                      <NavItem className="nav-item">
                        <NavLink
                          href="https://www.dealingroom.live/customer"
                          className="btn btn-outline-light my-3 my-sm-0 ml-lg-3"
                          onClick={this.toggleNavBar}
                        >
                          Start Ordering
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </div>

        {/* <header className="" id="home">
            <div className="container mt-5">
              <h1>Dealing Room</h1>
              <p className="tagline">
                The only scalable web-based POS to your bar/restaurant for your slow moving
                stock and lack of upsale opportunities problem.
              </p>
            </div>
            <div className="img-holder mt-3">
              <img src={MainScreen} alt="phone" className="img-fluid" />
            </div>
          </header> */}
        <LandingPageHeader backgroundImage={MainScreen} />

        <div className="section light-bg" id="features">
          <div className="container">
            <div className="section-title">
              <small>HIGHLIGHTS</small>
              <h3>Features you all love</h3>
            </div>

            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <span className="ti-plug gradient-fill ti-3x mr-3" />
                      <div className="media-body">
                        <h4 className="card-title">Simple</h4>
                        <p className="card-text">
                          No install, no plugin, everything is plug-and-play. All you need is a web-browser.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <span className="ti-server gradient-fill ti-3x mr-3" />
                      <div className="media-body">
                        <h4 className="card-title">Zero Infastructure Cost</h4>
                        <p className="card-text">
                        We host the server, database, and even the application. Literally, 0 infractructure cost.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <span className="ti-pulse gradient-fill ti-3x mr-3" />
                      <div className="media-body">
                        <h4 className="card-title">Risk Free</h4>
                        <p className="card-text">
                          Subscribe to our service on a monthly-based, no initial investment required.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section light-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8 d-flex align-items-center">
                <ul className="list-unstyled ui-steps">
                  <li className="media">
                    <div className="circle-icon mr-4">1</div>
                    <div className="media-body">
                      <h5>Create an Account</h5>
                      <p>
                        Onboarding has never been easier, all you have to do is
                        to scan the QR code and it will bring to you the
                        ordering page.{" "}
                      </p>
                    </div>
                  </li>
                  <li className="media my-4">
                    <div className="circle-icon mr-4">2</div>
                    <div className="media-body">
                      <h5>Encourage sales without being pushy</h5>
                      <p>
                        Every interactions are the fruitful result of your
                        customers, just sit back and let them have their way
                        with each other.
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <div className="circle-icon mr-4">3</div>
                    <div className="media-body">
                      <h5>Enjoy your life</h5>
                      <p>
                        Instant feedback from customer to kitchen, from manager
                        to server, kickback and enjoy the power of zero-delay
                        communication.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <img
                  src={MainScreen}
                  alt="iphone"
                  className="img-fluid-small"
                />
              </div>
            </div>
          </div>
        </div>


        <div className="section" id="pricing">
          <div className="container">
            <div className="section-title">
              <small>ONE FOR ALL</small>
              <h3>Pick your access point</h3>
            </div>

            <div className="card-deck">
              <div className="card pricing">
                <div className="card-head">
                  <small className="text-primary">
                    Bar/Restaurant Customers
                  </small>
                  <span className="price">Free</span>
                </div>
                <ul className="list-group list-group-flush">
                  <div className="list-group-item">0-Onboarding Fee</div>
                  <div className="list-group-item">No ordering limit</div>
                  <div className="list-group-item">Free user account</div>
                  <div className="list-group-item">
                    <del>Collaboration</del>
                  </div>
                  <div className="list-group-item">
                    <del>Reports and analytics</del>
                  </div>
                </ul>
                <div className="card-body">
                  <a
                    href="https://www.dealingroom.live/customer"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Open Portal
                  </a>
                </div>
              </div>
              <div className="card pricing popular">
                <div className="card-head">
                  <small className="text-primary">Business Owners</small>
                  <span className="price">TBA</span>
                </div>
                <ul className="list-group list-group-flush">
                  <div className="list-group-item">Screen Size Responsive</div>
                  <div className="list-group-item">500mb Image Storage</div>
                  <div className="list-group-item">Priority Support</div>
                  <div className="list-group-item">Custom Function</div>
                  <div className="list-group-item">Realtime Data</div>
                </ul>
                <div className="card-body">
                  <a
                    href="https://www.dealingroom.live/admin"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Open Manage Portal
                  </a>
                </div>
              </div>
              <div className="card pricing">
                <div className="card-head">
                  <small className="text-primary">Business Staffs</small>
                  <span className="price">TBA</span>
                </div>
                <ul className="list-group list-group-flush">
                  <div className="list-group-item">Instant Update</div>
                  <div className="list-group-item">Instant Feedback</div>
                  <div className="list-group-item">Zero-Delay</div>
                  <div className="list-group-item">Tablet Friendly</div>
                  <div className="list-group-item">Training On Demand</div>
                </ul>
                <div className="card-body">
                  <a
                    href="https://www.dealingroom.live/admin"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Open Staff Portal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="section pt-0">
          <div className="container">
            <div className="section-title">
              <small>FAQ</small>
              <h3>Frequently Asked Questions</h3>
            </div>

            <div className="row pt-4">
              <div className="col-md-6">
                <h4 className="mb-3">Can I try before I buy?</h4>
                <p className="light-font mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, urna eu pellentesque pretium, nisi nisi
                  fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum
                  sit amet mattis ante.{" "}
                </p>
                <h4 className="mb-3">What payment methods do you accept?</h4>
                <p className="light-font mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, urna eu pellentesque pretium, nisi nisi
                  fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum
                  sit amet mattis ante.{" "}
                </p>
              </div>
              <div className="col-md-6">
                <h4 className="mb-3">Can I change my plan later?</h4>
                <p className="light-font mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, urna eu pellentesque pretium, nisi nisi
                  fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum
                  sit amet mattis ante.{" "}
                </p>
                <h4 className="mb-3">Do you have a contract?</h4>
                <p className="light-font mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer rutrum, urna eu pellentesque pretium, nisi nisi
                  fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum
                  sit amet mattis ante.{" "}
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="section bg-gradient">
          <div className="container">
            <div className="call-to-action">
              <div className="box-icon">
                <span className="ti-mobile gradient-fill ti-3x" />
              </div>
              <h2>No Download Required</h2>
              <p className="tagline">
                Available for all major mobile, tablet, and desktop platforms.
                Rapidiously visualize optimal ROI rather than enterprise-wide
                methods of empowerment.{" "}
              </p>
              {/* <div className="my-4">
                <a href="#" className="btn btn-light">
                  <img src={AppleIcon} alt="icon" /> App Store
                </a>
                <a href="#" className="btn btn-light">
                  <img src={PlayIcon} alt="icon" /> Google play
                </a>
              </div> */}
              <p className="text-primary">
                <small>
                  <i>*Works on iOS 10.0.5+, Android Kitkat and above. </i>
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="light-bg py-5" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center text-lg-left">
                <p className="mb-2">
                  {" "}
                  <span className="ti-location-pin mr-2" /> Hong Kong Special
                  Administrate Region, China
                </p>
                <div className=" d-block d-sm-inline-block">
                  <p className="mb-2">
                    <span className="ti-email mr-2" />{" "}
                    <a className="mr-4" href="mailto:info@dealingroom.live">
                      info@dealingroom.live
                    </a>
                  </p>
                </div>
                <div className="d-block d-sm-inline-block">
                  <p className="mb-0">
                    <span className="ti-headphone-alt mr-2" />{" "}
                    <a href="tel:85268838583">+852 6883 8583</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="social-icons">
                  <a href="https://github.com/cheungdzinyung/DealingRoom">
                    <span className="ti-github" />
                  </a>
                  <a href="https://www.dealingroom.live/">
                    <span className="ti-desktop" />
                  </a>
                  <a href="https://www.dealingroom.live/customer">
                    <span className="ti-mobile" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="my-5 text-center">
          <p className="mb-2">
            <small>
              COPYRIGHT © 2018. ALL RIGHTS RESERVED. MOBAPP TEMPLATE BY{" "}
              <a href="https://colorlib.com">COLORLIB</a>
            </small>
          </p>

          <small>
            <a href="#" className="m-2">
              PRESS
            </a>
            <a href="#" className="m-2">
              TERMS
            </a>
            <a href="#" className="m-2">
              PRIVACY
            </a>
          </small>
        </footer>
      </div>
    );
  }
}
