import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
function App(){
  const firsName= "Valera"
  const lastName= "Scam"
  return(
    <h1>Hello {firsName} {lastName}</h1>
  )
}
ReactDOM.render(<App />,document.getElementById("root")) 