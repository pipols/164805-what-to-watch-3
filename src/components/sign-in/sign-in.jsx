import React from "react";
import {connect} from "react-redux";
import {Operation} from "../../reducer/user/user";
import PropTypes from "prop-types";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onLogin({
      login: this.emailInput.current.value,
      password: this.passwordInput.current.value
    });
  }

  render() {
    return (<div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <h1 className="page-title user-page__title">
          Sign in
        </h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" onSubmit={this.handleSubmit} className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" ref={this.emailInput} type="email" placeholder="Email address" name="user-email" id="user-email"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" ref={this.passwordInput} type="password" placeholder="Password" name="user-password" id="user-password"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>
            © 2019 What to watch Ltd.
          </p>
        </div>
      </footer>
    </div>);
  }
}

SignIn.propTypes = {
  onLogin: PropTypes.func.isRequired
};

const mapDispatchoProps = (dispatch) => ({
  onLogin(authData) {
    dispatch(Operation.login(authData));
  }
});

export {SignIn};
export default connect(null, mapDispatchoProps)(SignIn);
