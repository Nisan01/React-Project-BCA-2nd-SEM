// Bodymain.jsx
import React, { useState } from "react";
import { Navbar } from "../Navigation bar/Navbar";
import SliderComponent from "./Sliderbanner";
import Footer from "../footer/footer";

import Aboutpg from "./About";

function Bodymain() {
  const [results, setResults] = useState(null);

  return (
    <>
      <Navbar setResults={setResults} />
      <SliderComponent />
      <Aboutpg />
      <Footer />
    </>
  );
}

export default Bodymain;
