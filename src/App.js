import React, { useState, useEffect } from "react";
//import "./App.css";
import "./styles/scss/App.scss";
import Display from "./Components/Display";
import FloatingMenu from "./Components/FloatingMenu";
import ConstructionBanner from "./Components/ConstructionBanner";


function App() {
  return (
    <div className="App">
      <FloatingMenu />
      <Display />
      <ConstructionBanner />
    </div>
  );
}

export default App




// const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8000/message")
//       .then((res) => res.json())
//       .then((data) => setMessage(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <h1>{message}</h1>
//     </div>
//   );