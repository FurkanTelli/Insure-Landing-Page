import React from "react";

const Toolbar = ({activeHamburgerMenu, handleHamburgerMenu}) => {
    return (
        <div className="toolbar">
        <img src="./images/logo.svg" />
        <div className="toolbar-btns">
          <h2>HOW WE WORK</h2>
          <h2>BLOG</h2>
          <h2>ACCOUNT</h2>
          <button>VIEW PLANS</button>
        </div>
        {activeHamburgerMenu ? <img onClick={handleHamburgerMenu}  className="mobile-hamburger-menu" src="./images/icon-close.svg" /> :
         <img onClick={handleHamburgerMenu}  className="mobile-hamburger-menu" src="./images/icon-hamburger.svg" /> }
      </div>
    )
}

export default Toolbar;