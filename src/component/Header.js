import sun from "../asset/images/icon-sun.svg";
import moon from "../asset/images/icon-moon.svg";
import darkBg from "../asset/images/bg-desktop-dark.jpg"
import darkBgM from "../asset/images/bg-mobile-dark.jpg"
import lightBg from "../asset/images/bg-desktop-light.jpg"
import lightBgM from "../asset/images/bg-mobile-light.jpg"

import { useEffect, useState } from "react";

const Header = () => {
  const [mode, setMode] = useState(true);

  useEffect(() => {

    const app = document.querySelector('.App')

    if(mode){
        app.style.backgroundImage = ` url(${darkBg || darkBgM}) `
        app.classList.add('dark-mode')
        app.classList.remove('light-mode')

    }
    else{
        app.style.backgroundImage = ` url(${ lightBg || lightBgM})`
        app.classList.remove('dark-mode')
        app.classList.add('light-mode')
    }

  }, [mode]);

  useEffect(() => {
    const theme = localStorage.getItem("localMode");
    setMode(JSON.parse(theme));
  }, []);

 
  useEffect(() => {
    localStorage.setItem("localMode", JSON.stringify(mode))
  });

  return (
    <header className="header ">

      <h1>TODO</h1>

      <div
        className="theme-controler"
        onClick={() => {
          if (mode) {
            setMode(false);
          } else setMode(true);
        }}
      >

        {mode ? <img src={moon} alt="" /> : <img src={sun} alt="" />}

      </div>
    </header>
  );
};

export default Header;
