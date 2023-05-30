import React from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/Header.css";

import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";
// element={headerImage}
const Header = () => {
  //   const images = [img1, img2, img3];
  //   const index = Math.floor(Math.random() * 3);
  //   const img = images[index];
  console.log("Header");
  return (
    //bez losowania
    <Routes>
      <Route path="/" element={<img src={img1} alt="city" />} />
      <Route path="/products" element={<img src={img2} alt="city" />} />
      <Route path="/contacts" element={<img src={img3} alt="city" />} />
      <Route path="/admin" element={<img src={img1} alt="city" />} />
      <Route path="*" element={<img src={img1} alt="city" />} />
    </Routes>

    //losowanie obrazka nie renderuje ponownie

    // <img src={img} alt="header" />
  );
};

export default Header;
