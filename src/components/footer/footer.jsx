import React from "react";
import Logo from "../logo/logo.jsx";

const LIGHT_LOGO_CLASS = `logo__link--light`;

const Footer = () => (
  <footer className="page-footer">
    <Logo logoClass={LIGHT_LOGO_CLASS} />
    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);

export default Footer;
