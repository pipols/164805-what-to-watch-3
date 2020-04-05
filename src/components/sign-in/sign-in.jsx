import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import {ClassName} from "../../const/common";
import {getUserStatus} from "../../reducer/user/selector";
import {Redirect} from "react-router-dom";
import {Operation} from "../../reducer/user/user";
import withSignIn from "../../hocs/with-sign-in/with-sign-in.jsx";
// import history from "../../history";
import {AuthorizationStatus} from "../../const/common";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onLogin({
      login: this.props.email,
      password: this.props.password
    });
  }

  render() {
    return this.props.authorizationStatus === AuthorizationStatus.AUTH
      ? <Redirect to="/" />
      // ? history.goBack()
      : <div className="user-page">

        <Header className={ClassName.HEADER_USER_PAGE} />

        <div className="sign-in user-page__content">
          <form action="#" onSubmit={this.handleSubmit} className="sign-in__form">

            {this.props.isEmailValid
              || <div className="sign-in__message">
                <p>Please enter a valid email address</p>
              </div>}

            {this.props.authorizationStatus === AuthorizationStatus.BAD_REQUEST
              && <div className="sign-in__message">
                <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
              </div>}

            <div className="sign-in__fields">
              <div className={`sign-in__field ${this.props.isEmailValid ? `` : `sign-in__field--error`} `}>
                <input
                  className="sign-in__input"
                  onChange={(evt) => {
                    this.props.onFieldChange(evt);
                    this.props.onEmailValidity(evt);
                  }}
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"/>

                <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
                </label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  onChange={this.props.onFieldChange}
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  required />
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

        <Footer />

      </div>;
  }
}

SignIn.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onEmailValidity: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  isEmailValid: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getUserStatus(state)
});

const mapDispatchoProps = (dispatch) => ({
  onLogin(authData) {
    dispatch(Operation.login(authData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchoProps)(withSignIn(SignIn));
