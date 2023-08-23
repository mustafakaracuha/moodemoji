import React, { useState, useEffect } from "react";
import logo from "../../assets/logo2.png";
import logo2 from "../../assets/logo3.png";
import logo3 from "../../assets/logo4.png";

function Header() {
  const logoImages = [logo, logo3, logo2];
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logoImages.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="w-full flex ml-20 mt-5 max-sm:ml-10 max-sm:mt-5 max-sm:items-center max-sm:justify-center max-sm:opacity-30">
      <p className="text-[30px] font-bold">M</p>
      <img
        src={logoImages[currentLogoIndex]}
        alt="Mood Flow Logo"
        className="w-14 h-14 relative top-[14px] max-sm:top-[19px] left-1"
      />
      <p className="text-[30px] ml-2 font-bold">d Flow</p>
    </header>
  );
}

export default Header;
