import React from "react";
import FooterOptions from "../footerBottom/FooterOptions";
import LogoAndSocial from "../footerTop/LogoAndSocial";

const FooterArea = () => {
  return (
    <>
      <div className="footer">
        <LogoAndSocial />
        <hr />
        <FooterOptions />
      </div>
    </>
  );
};
export default FooterArea;
