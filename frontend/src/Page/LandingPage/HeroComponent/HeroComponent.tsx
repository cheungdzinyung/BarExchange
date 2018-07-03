import * as React from "react";
import './style.css';
import '../device-mockups/device-mockups.css'
import demoScreen1 from './demo-screen-1.jpg';

export const HeroComponent = ()=>{
  return <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">Dealing Room is an exciting concept that combines an upscale gastropub with the excitement of a stock market trading floor</h1>
            <a href="#howitworks" className="btn btn-outline btn-xl js-scroll-trigger">Learn More</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  <img src={demoScreen1} className="img-fluid" alt="" />
                </div>
                <div className="button"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
};