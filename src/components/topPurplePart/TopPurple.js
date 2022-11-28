import React from "react";

const TopPurple = ({activeHamburgerMenu,}) => {
    return (
        <div className={activeHamburgerMenu ? "first-part-purple-none" : "first-part-purple"}>
        <div className="first-purple-part-text">
          <h1>
            Humanizing
            <br />
            your insurance.
          </h1>
          <p>
            Get your life insurance covarage easier and faster. We blend our
            expertise
            <br />
            and technology to help you find the plan thats right for you. Ensure
            you
            <br />
            and you loved ones are protected
          </p>
          <button>VIEW PLANS</button>
        </div>
        <img className="desktop-purple-img" src="./images/image-intro-desktop.jpg" />
      </div>
    )
}
export default TopPurple;