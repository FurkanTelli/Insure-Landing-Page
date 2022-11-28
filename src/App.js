import "./App.css";
import { useState } from "react";
import Toolbar from "./components/toolbarArea/Toolbar";
import TopPurple from "./components/topPurplePart/TopPurple";
import Titles from "./components/middlePartTitles/Titles";
import PurpleCard from "./components/middlePurpleCard/PurpleCard";
import FooterArea from "./components/footer/FooterArea";
function App() {
    const [activeHamburgerMenu, setActiveHamburgerMenu] = useState(false)

    const handleHamburgerMenu = () => {
      {activeHamburgerMenu ? setActiveHamburgerMenu(false) : setActiveHamburgerMenu(true)}
    }

  return (
    <div className="App">
      <Toolbar activeHamburgerMenu={activeHamburgerMenu} handleHamburgerMenu={handleHamburgerMenu} />
      <div className={activeHamburgerMenu ? "mobile-hamburger-contains" : "mobile-hamburger-none"}>
          <h2>HOW WE WORK</h2>
          <h2>BLOG</h2>
          <h2>ACCOUNT</h2>
          <button>VIEW PLANS</button>
        </div>
        <TopPurple activeHamburgerMenu={activeHamburgerMenu} />
      <img className="mobile-purple-img" src="./images/image-intro-desktop.jpg" />
      <div className="main-white-part">
        <div className="main-part-contains">
          <h1>We're different</h1>
          <Titles />
          <PurpleCard />
          <FooterArea />
          </div> 
        </div>
      </div>
  );
}

export default App;
