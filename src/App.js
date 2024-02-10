import { useState } from "react";

import "./App.css";

import Bodymain from "./components/Body/bodymain";


function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">

     <Bodymain/>
  

    </div>
  );
}

export default App;
