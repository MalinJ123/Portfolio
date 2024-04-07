import "../styles/header.css";
import { useState, useEffect } from "react";

function Header() {
  const [isOpenMenuOverlay, setIsOpenMenuOverlay] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //   ser till att menuOverlayen inte är öppen när skärmen är över 701px
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 701) {
        setIsOpenMenuOverlay(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpenMenuOverlay(!isOpenMenuOverlay);
  };

  return (
    <>
      <section className="header">
        <div className="header__container"></div>
        <div className="header__container">
          <div className="header__container--navbar">Home</div>
          <div className="header__container--navbar">Portfolio</div>
          <div className="header__container--navbar">About Me</div>
          <div className="header__container--navbar">Contact</div>
        </div>
        <span className="material-symbols-outlined menu" onClick={toggleMenu}>
          Menu
        </span>
      </section>
      {isOpenMenuOverlay && windowWidth <= 701 && (
        <div className="menu-overlay">
          <div className="menu-overlay__content">
            <div className="menu-item">Home</div>
            <div className="menu-item">Portfolio</div>
            <div className="menu-item">About Me</div>
            <div className="menu-item">Contact</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
