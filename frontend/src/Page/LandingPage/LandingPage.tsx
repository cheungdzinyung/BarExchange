import * as React from "react";

// import "font-awesome/css/font-awesome.css";
import "./LandingPage.scss";

import { FooterComponent } from "./FooterComponent/FooterComponent";
import { SocialComponent } from "./SocialComponent/SocialComponent";
import { HowItWorksComponent } from "./HowItWorksComponent/HowItWorksComponent";
import { FeaturesComponent } from "./FeaturesComponent/FeaturesComponent";
import { DiscoverComponent } from "./DiscoverComponent/DiscoverComponent";
import { HeroComponent } from "./HeroComponent/HeroComponent";
// import NavBarComponent from "src/Components/container/homepage/NavBarComponent/NavBarComponent";

export default class LandingPage extends React.Component<
  {},
  { navBarShrink: string }
> {
  constructor(props: { navBarShrink: string }) {
    super(props);
    this.state = { navBarShrink: "" };
    this.handleScroll = this.handleScroll.bind(this);
  }

  public componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(this);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  public handleScroll(e: any) {
    const nbs = window.pageYOffset > 100 ? "navbar-shrink" : "";
    this.setState({ navBarShrink: nbs });
  }

  public render() {
    // const nbs = this.state ? this.state.navBarShrink : "";
    return (
      <div>
        {/* <NavBarComponent navBarShrink={nbs} /> */}
        <HeroComponent />
        <HowItWorksComponent />
        <FeaturesComponent />
        <DiscoverComponent />
        <SocialComponent />
        <FooterComponent />
      </div>
    );
  }
}
