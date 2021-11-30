import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/home/Home";
function App() {
  return (

    <div className="container">



      <Home />



    </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);