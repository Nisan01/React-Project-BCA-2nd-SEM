import React, { useEffect, useState } from "react";
import "./search.css";
import feather from "feather-icons";

const MyComponent = () => {
  useEffect(() => {
    // Call feather.replace() after the component has been mounted
    // Make sure to include the Feather Icons library in your project
    feather.replace(); // Make sure the Feather Icons library is imported or included
  }, []);

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <div>
        <div className="nav-toggle">
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </div>

        <div className={menu_class}>
          <nav className="navbar11">
            <ul className="navbar__menu">
              <li className="navbar__item">
                <a href="#" className="navbar__link">
                  <i data-feather="home"></i>
                  <span>Home</span>
                </a>
              </li>
              <li className="navbar__item">
                <a href="#" className="navbar__link">
                  <i data-feather="message-square"></i>
                  <span>About</span>
                </a>
              </li>

              <li className="navbar__item">
                <a href="#" className="navbar__link">
                  <i data-feather="archive"></i>
                  <span>Resources</span>
                </a>
              </li>
              <li className="navbar__item">
                <a href="#" className="navbar__link">
                  <i data-feather="help-circle"></i>
                  <span>Help</span>
                </a>
              </li>
              <li className="navbar__item">
                <a href="#" className="navbar__link">
                  <i data-feather="settings"></i>
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
