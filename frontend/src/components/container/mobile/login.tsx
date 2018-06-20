// Importing modules from library
import * as History from "history";
import * as React from "react";

// Importing UI elements
import { Card } from "@blueprintjs/core";

// Importing static assets
import facebook from "../../assets/icons/signup/facebook.svg";
import google from "../../assets/icons/signup/google.svg";
import logo from "../../assets/icons/all/logo.svg";

// redux
import { connect } from "react-redux";
import { IRootState } from "../../../redux/reducers/index";
import { localLogin } from "../../../redux/actions/actions_user";

interface ILoginState {
  username: string,
  password: string,
}

interface ILoginProps {
  history: History.History,
  // isAuth: boolean,
  user_id: number,
  localLogin: (username: string, password: string) => void,
}

class PureLogin extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {
      username: "Andrew",
      password: "123456",
    }
  }

  public username = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: e.target.value });
  }

  public password = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  }

  public toLocalLogin = () => {
    this.props.localLogin(this.state.username, this.state.password);
  };
  
  public componentDidUpdate () {
    // actually shld check if token is valid
    if(localStorage.getItem("dealingRoomToken")) {
      this.props.history.push("/initialize");
    }
  }

  public componentDidMount () {
    // actually shld check if token is valid
    if(localStorage.getItem("dealingRoomToken")) {
      this.props.history.push("/initialize");
    }
  }

  public render() {
    return (
      <div className="login-container">
        <div className="login-top">
          <div className="logo-container">
            <img src={logo} alt="Dealing Room Logo" className="logo" />
            <span className="logo-name">Dealing Room</span>
          </div>
          <div className="social-login">
            <div className="banner rd-corner google">
              <img className="banner-img" src={google} alt="" />
            </div>
            <div className="banner rd-corner facebook ">
              <img className="banner-img" src={facebook} alt="" />
            </div>
          </div>
          <div className="divider">
            <hr className="divider-break" />
            <span className="divider-text">OR</span>
            <hr className="divider-break" />
          </div>
        </div>
        <div className="login-bottom">
          <Card className="login-card rd-corner">
            <div className="status-switch">
              <div className="status">
                <span className="status-text">LOGIN</span>
              </div>
              <div className="status">
                <span className="status-text">SIGNUP</span>
              </div>
            </div>
            <form className="form" action="">
              <input
                className="form-input rd-corner"
                name="username"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange = {this.username}
              />
              <input
                className="form-input rd-corner"
                placeholder="Passwords"
                name="password"
                type="password"
                value={this.state.password}
                onChange = {this.password}
              />
            </form>

            <div className="login-button ">
              <button className="submit rd-corner" onClick={this.toLocalLogin}>
                <span className="submit-text">LOGIN</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    // isAuth: state.user.isAuth,
    user_id: state.user.user_id,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    localLogin: (username: string, password: string) => {
      dispatch(localLogin(username, password));
    }
  }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(PureLogin);

export default Login