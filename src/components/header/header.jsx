import React from "react";
import Logo from "../logo/logo.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getUserStatus, getUserData} from "../../reducer/user/selector";

const Header = ({isAuth, className, user}) => (
  <header className={`page-header ${className}`}>
    <Logo />
    <div className="user-block">

      {isAuth && <div className="user-block__avatar">
        <img src={user.avatarUrl} alt="User avatar" width={63} height={63}/>
      </div>}

      {isAuth || <Link to="/login" className="user-block__link">Sign in</Link>}

    </div>
  </header>
);

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.stringd,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  })
};

const mapStateToProps = (state) => ({
  isAuth: getUserStatus(state),
  user: getUserData(state)
});

export {Header};
export default connect(mapStateToProps)(React.memo(Header));
