import React, { useState, useEffect } from "react";
//import "./App.css";
import "./styles/scss/App.scss";
import NameSection from './Components/NameSection';

function App() {
  return (
    <div className="App">
      <NameSection />
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