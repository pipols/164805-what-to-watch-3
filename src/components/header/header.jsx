import React from "react";
import Logo from "../logo/logo.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getUserStatus} from "../../reducer/user/selector";

const Header = ({isAuth}) => (
  <header className="page-header movie-card__head">
    <Logo />
    <div className="user-block">

      {isAuth && <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width={63} height={63}/>
      </div>}

      {isAuth || <a href="sign-in.html" className="user-block__link">Sign in</a>}

    </div>
  </header>
);

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuth: getUserStatus(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
