import React from "react";
import Logo from "../logo/logo.jsx";
import {ClassName} from "../../const/common";

const Footer = () => (
  <footer className="page-footer">
    <Logo className={ClassName.LOGO_LIGHT} />
    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);

export default React.memo(Footer);
