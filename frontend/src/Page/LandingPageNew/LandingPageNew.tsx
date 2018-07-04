// Importing modules from library
import * as React from "react";

// Importing styling and static assets
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/themify-icons.css";

import AppleIcon from "./images/appleicon.png";
import Logo from "./images/client-logos.png";
import Client from "./images/client.png";
import Dualphone from "./images/dualphone.png";
import Graphic from "./images/graphic.png";
import IphoneX from "./images/iphonex.png";
import OwnLogo from "./images/logo.png";
import Perspective from "./images/perspective.png";
import Playicon from "./images/playicon.png";
import Screen1 from "./images/screen1.jpg";
import Screen2 from "./images/screen2.jpg";
import Screen3 from "./images/screen3.jpg";

// import "./css/owl.carousel.min.css";
// <script src="js/jquery-3.2.1.min.js"></script>
// <script src="js/bootstrap.bundle.min.js"></script>
// <!-- Plugins JS -->
// <script src="js/owl.carousel.min.js"></script>
// <!-- Custom JS -->
// <script src="js/script.js"></script>

export default class LandingPage extends React.Component {
//   public componentDidMount() {
//     const bootstrap = document.createElement("script");
//     bootstrap.src = "./static/scripts/bootstrap.bundle.min.js";
//     bootstrap.async = true;
//     document.body.appendChild(bootstrap);

//     const owl = document.createElement("script");
//     owl.src = "./static/scripts/owl.carousel.min.js";
//     owl.async = true;
//     document.body.appendChild(owl);

//     const script = document.createElement("script");
//     script.src = "./static/scripts/script.js";
//     script.async = true;
//     document.body.appendChild(script);

//     const jquery = document.createElement("script");
//     jquery.src = "./static/scripts/jquery-3.2.1.min.js";
//     jquery.async = true;
//     document.body.appendChild(jquery);
//   }
  public render() {
    return (
      <body data-spy="scroll" data-target="#navbar" data-offset="30">
        {/* <!-- Nav Menu --> */}

        <div className="nav-menu fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-dark navbar-expand-lg">
                  <a className="navbar-brand" href="index.html">
                    <img src={OwnLogo} className="img-fluid" alt="logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon">?</span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link active" href="#home">
                          HOME
                          <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#features">
                          FEATURES
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#gallery">
                          GALLERY
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#pricing">
                          PRICING
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#contact">
                          CONTACT
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="btn btn-outline-light my-3 my-sm-0 ml-lg-3"
                        >
                          Download
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <header className="bg-gradient" id="home">
          <div className="container mt-5">
            <h1>Mobile App Landing Page Template</h1>
            <p className="tagline">
              The one and only solution for any kind of mobila app landing
              needs. Just change the screenshots and texts and you are good to
              go.{" "}
            </p>
          </div>
          <div className="img-holder mt-3">
            <img src={IphoneX} alt="phone" className="img-fluid" />
          </div>
        </header>

        <div className="client-logos my-5">
          <div className="container text-center">
            <img src={Logo} alt="client logos" className="img-fluid" />
          </div>
        </div>

        <div className="section light-bg" id="features">
          <div className="container">
            <div className="section-title">
              <small>HIGHLIGHTS</small>
              <h3>Features you love</h3>
            </div>

            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <span className="ti-face-smile gradient-fill ti-3x mr-3">
                        ?
                      </span>
                      <div className="media-body">
                        <h4 className="card-title">Simple</h4>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer rutrum, urna eu pellentesque
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
                      <span className="ti-settings gradient-fill ti-3x mr-3">
                        ?
                      </span>
                      <div className="media-body">
                        <h4 className="card-title">Customize</h4>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer rutrum, urna eu pellentesque
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
                      <span className="ti-lock gradient-fill ti-3x mr-3">
                        ?
                      </span>
                      <div className="media-body">
                        <h4 className="card-title">Secure</h4>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer rutrum, urna eu pellentesque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // end .section --> */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-6">
                <div className="box-icon">
                  <span className="ti-mobile gradient-fill ti-3x">?</span>
                </div>
                <h2>Discover our App</h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati vel exercitationem eveniet vero maxime ratione{" "}
                </p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
            <div className="perspective-phone">
              <img
                src={Perspective}
                alt="perspective phone"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* <!-- // end .section --> */}

        <div className="section light-bg">
          <div className="container">
            <div className="section-title">
              <small>FEATURES</small>
              <h3>Do more with our app</h3>
            </div>

            <ul className="nav nav-tabs nav-justified" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#communication"
                >
                  Communication
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#schedule">
                  Scheduling
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#messages">
                  Messages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#livechat">
                  Live Chat
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="communication">
                <div className="d-flex flex-column flex-lg-row">
                  <img
                    src={Graphic}
                    alt="graphic"
                    className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0"
                  />
                  <div>
                    <h2>Communicate with ease</h2>
                    <p className="lead">
                      Uniquely underwhelm premium outsourcing with proactive
                      leadership skills.{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer rutrum, urna eu pellentesque pretium, nisi nisi
                      fermentum enim, et sagittis dolor nulla vel sapien.
                      Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                      congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem
                      placerat volutpat. Praesent quis facilisis elit. Sed
                      condimentum neque quis ex porttitor,
                    </p>
                    <p>
                      {" "}
                      malesuada faucibus augue aliquet. Sed elit est, eleifend
                      sed dapibus a, semper a eros. Vestibulum blandit vulputate
                      pharetra. Phasellus lobortis leo a nisl euismod, eu
                      faucibus justo sollicitudin. Mauris consectetur, tortor
                      sed tempor malesuada, sem nunc porta augue, in dictum arcu
                      tortor id turpis. Proin aliquet vulputate aliquam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="schedule">
                <div className="d-flex flex-column flex-lg-row">
                  <div>
                    <h2>Scheduling when you want</h2>
                    <p className="lead">
                      Uniquely underwhelm premium outsourcing with proactive
                      leadership skills.{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer rutrum, urna eu pellentesque pretium, nisi nisi
                      fermentum enim, et sagittis dolor nulla vel sapien.
                      Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                      congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem
                      placerat volutpat. Praesent quis facilisis elit. Sed
                      condimentum neque quis ex porttitor,
                    </p>
                    <p>
                      {" "}
                      malesuada faucibus augue aliquet. Sed elit est, eleifend
                      sed dapibus a, semper a eros. Vestibulum blandit vulputate
                      pharetra. Phasellus lobortis leo a nisl euismod, eu
                      faucibus justo sollicitudin. Mauris consectetur, tortor
                      sed tempor malesuada, sem nunc porta augue, in dictum arcu
                      tortor id turpis. Proin aliquet vulputate aliquam.
                    </p>
                  </div>
                  <img
                    src={Graphic}
                    alt="graphic"
                    className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0"
                  />
                </div>
              </div>
              <div className="tab-pane fade" id="messages">
                <div className="d-flex flex-column flex-lg-row">
                  <img
                    src={Graphic}
                    alt="graphic"
                    className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0"
                  />
                  <div>
                    <h2>Realtime Messaging service</h2>
                    <p className="lead">
                      Uniquely underwhelm premium outsourcing with proactive
                      leadership skills.{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer rutrum, urna eu pellentesque pretium, nisi nisi
                      fermentum enim, et sagittis dolor nulla vel sapien.
                      Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                      congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem
                      placerat volutpat. Praesent quis facilisis elit. Sed
                      condimentum neque quis ex porttitor,
                    </p>
                    <p>
                      {" "}
                      malesuada faucibus augue aliquet. Sed elit est, eleifend
                      sed dapibus a, semper a eros. Vestibulum blandit vulputate
                      pharetra. Phasellus lobortis leo a nisl euismod, eu
                      faucibus justo sollicitudin. Mauris consectetur, tortor
                      sed tempor malesuada, sem nunc porta augue, in dictum arcu
                      tortor id turpis. Proin aliquet vulputate aliquam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="livechat">
                <div className="d-flex flex-column flex-lg-row">
                  <div>
                    <h2>Live chat when you needed</h2>
                    <p className="lead">
                      Uniquely underwhelm premium outsourcing with proactive
                      leadership skills.{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer rutrum, urna eu pellentesque pretium, nisi nisi
                      fermentum enim, et sagittis dolor nulla vel sapien.
                      Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                      congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem
                      placerat volutpat. Praesent quis facilisis elit. Sed
                      condimentum neque quis ex porttitor,
                    </p>
                    <p>
                      {" "}
                      malesuada faucibus augue aliquet. Sed elit est, eleifend
                      sed dapibus a, semper a eros. Vestibulum blandit vulputate
                      pharetra. Phasellus lobortis leo a nisl euismod, eu
                      faucibus justo sollicitudin. Mauris consectetur, tortor
                      sed tempor malesuada, sem nunc porta augue, in dictum arcu
                      tortor id turpis. Proin aliquet vulputate aliquam.
                    </p>
                  </div>
                  <img
                    src={Graphic}
                    alt="graphic"
                    className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // end .section --> */}

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={Dualphone} alt="dual phone" className="img-fluid" />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <div className="box-icon">
                    <span className="ti-rocket gradient-fill ti-3x">?</span>
                  </div>
                  <h2>Launch your App</h2>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati vel exercitationem eveniet vero maxime ratione{" "}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // end .section --> */}

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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer rutrum, urna eu pellentesque pretium obcaecati
                        vel exercitationem{" "}
                      </p>
                    </div>
                  </li>
                  <li className="media my-4">
                    <div className="circle-icon mr-4">2</div>
                    <div className="media-body">
                      <h5>Share with friends</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer rutrum, urna eu pellentesque pretium obcaecati
                        vel exercitationem eveniet
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <div className="circle-icon mr-4">3</div>
                    <div className="media-body">
                      <h5>Enjoy your life</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer rutrum, urna eu pellentesque pretium obcaecati
                        vel exercitationem{" "}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <img src={IphoneX} alt="iphone" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // end .section --> */}

        <div className="section">
          <div className="container">
            <div className="section-title">
              <small>TESTIMONIALS</small>
              <h3>What our Customers Says</h3>
            </div>

            <div className="testimonials owl-carousel">
              <div className="testimonials-single">
                <img src={Client} alt="client" className="client-img" />
                <blockquote className="blockquote">
                  Uniquely streamline highly efficient scenarios and 24/7
                  initiatives. Conveniently embrace multifunctional ideas
                  through proactive customer service. Distinctively
                  conceptualize 2.0 intellectual capital via user-centric
                  partnerships.
                </blockquote>
                <h5 className="mt-4 mb-2">Crystal Gordon</h5>
                <p className="text-primary">United States</p>
              </div>
              <div className="testimonials-single">
                <img src={Client} alt="client" className="client-img" />
                <blockquote className="blockquote">
                  Uniquely streamline highly efficient scenarios and 24/7
                  initiatives. Conveniently embrace multifunctional ideas
                  through proactive customer service. Distinctively
                  conceptualize 2.0 intellectual capital via user-centric
                  partnerships.
                </blockquote>
                <h5 className="mt-4 mb-2">Crystal Gordon</h5>
                <p className="text-primary">United States</p>
              </div>
              <div className="testimonials-single">
                <img src={Client} alt="client" className="client-img" />
                <blockquote className="blockquote">
                  Uniquely streamline highly efficient scenarios and 24/7
                  initiatives. Conveniently embrace multifunctional ideas
                  through proactive customer service. Distinctively
                  conceptualize 2.0 intellectual capital via user-centric
                  partnerships.
                </blockquote>
                <h5 className="mt-4 mb-2">Crystal Gordon</h5>
                <p className="text-primary">United States</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // end .section --> */}

        <div className="section light-bg" id="gallery">
          <div className="container">
            <div className="section-title">
              <small>GALLERY</small>
              <h3>App Screenshots</h3>
            </div>

            <div className="img-gallery owl-carousel owl-theme">
              <img src={Screen1} alt="image" />
              <img src={Screen2} alt="image" />
              <img src={Screen3} alt="image" />
              <img src={Screen1} alt="image" />
            </div>
          </div>
        </div>
        {/* <!-- // end .section --> */}

        <div className="section" id="pricing">
          <div className="container">
            <div className="section-title">
              <small>PRICING</small>
              <h3>Upgrade to Pro</h3>
            </div>

            <div className="card-deck">
              <div className="card pricing">
                <div className="card-head">
                  <small className="text-primary">PERSONAL</small>
                  <span className="price">
                    $14
                    <sub>/m</sub>
                  </span>
                </div>
                <ul className="list-group list-group-flush">
                  <div className="list-group-item">10 Projects</div>
                  <div className="list-group-item">5 GB Storage</div>
                  <div className="list-group-item">Basic Support</div>
                  <div className="list-group-item">
                    <del>Collaboration</del>
                  </div>
                  <div className="list-group-item">
                    <del>Reports and analytics</del>
                  </div>
                </ul>
                <div className="card-body">
                  <a href="#" className="btn btn-primary btn-lg btn-block">
                    Choose this Plan
                  </a>
                </div>
              </div>
              <div className="card pricing popular">
                <div className="card-head">
                  <small className="text-primary">FOR TEAMS</small>
                  <span className="price">
                    $29
                    <sub>/m</sub>
                  </span>
                </div>
                <ul className="list-group list-group-flush">
                  <div className="list-group-item">Unlimited Projects</div>
                  <div className="list-group-item">100 GB Storage</div>
                  <div className="list-group-item">Priority Support</div>
                  <div className="list-group-item">Collaboration</div>
                  <div className="list-group-item">Reports and analytics</div>
                </ul>
                <div className="card-body">
                  <a href="#" className="btn btn-primary btn-lg btn-block">
                    Choose this Plan
                  </a>
                </div>
              </div>
              <div className="card pricing">
                <div className="card-head">
                  <small className="text-primary">ENTERPRISE</small>
                  <span className="price">
                    $249
                    <sub>/m</sub>
                  </span>
                </div>
                <ul className="list-group list-group-flush">
                  <div className="list-group-item">Unlimited Projects</div>
                  <div className="list-group-item">Unlimited Storage</div>
                  <div className="list-group-item">Collaboration</div>
                  <div className="list-group-item">Reports and analytics</div>
                  <div className="list-group-item">Web hooks</div>
                </ul>
                <div className="card-body">
                  <a href="#" className="btn btn-primary btn-lg btn-block">
                    Choose this Plan
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- // end .pricing --> */}
          </div>
        </div>
        {/* <!-- // end .section --> */}

        <div className="section pt-0">
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
        </div>
        {/* <!-- // end .section --> */}

        <div className="section bg-gradient">
          <div className="container">
            <div className="call-to-action">
              <div className="box-icon">
                <span className="ti-mobile gradient-fill ti-3x">?</span>
              </div>
              <h2>Download Anywhere</h2>
              <p className="tagline">
                Available for all major mobile and desktop platforms.
                Rapidiously visualize optimal ROI rather than enterprise-wide
                methods of empowerment.{" "}
              </p>
              <div className="my-4">
                <a href="#" className="btn btn-light">
                  <img src={AppleIcon} alt="icon" /> App Store
                </a>
                <a href="#" className="btn btn-light">
                  <img src={Playicon} alt="icon" /> Google play
                </a>
              </div>
              <p className="text-primary">
                <small>
                  <i>*Works on iOS 10.0.5+, Android Kitkat and above. </i>
                </small>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- // end .section --> */}

        <div className="light-bg py-5" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center text-lg-left">
                <p className="mb-2">
                  <span className="ti-location-pin mr-2">?</span> 1485 Pacific
                  St, Brooklyn, NY 11216 USA
                </p>
                <div className=" d-block d-sm-inline-block">
                  <p className="mb-2">
                    <span className="ti-email mr-2">?</span>
                    <a className="mr-4" href="mailto:support@mobileapp.com">
                      support@mobileapp.com
                    </a>
                  </p>
                </div>
                <div className="d-block d-sm-inline-block">
                  <p className="mb-0">
                    <span className="ti-headphone-alt mr-2">?</span>
                    <a href="tel:51836362800">518-3636-2800</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="social-icons">
                  <a href="#">
                    <span className="ti-facebook">?</span>
                  </a>
                  <a href="#">
                    <span className="ti-twitter-alt">?</span>
                  </a>
                  <a href="#">
                    <span className="ti-instagram">?</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- // end .section --> */}
        <footer className="my-5 text-center">
          {/* <!-- Copyright removal is not prohibited! --> */}
          <p className="mb-2">
            <small>
              COPYRIGHT © 2017. ALL RIGHTS RESERVED. MOBAPP TEMPLATE BY
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
      </body>
    );
  }
}
