import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
function App(){
  const date= new Date()
  const hours= date.getHours()
  let timeofday
  if (hours < 12) {
    timeofday = "morning"
  } else if (hours > 12 && hours <17){
    timeofday = "afrernoon"
  } else{
    timeofday = "night"
  }
  return(
    <h1>Good {timeofday}!</h1>
  )
}
ReactDOM.render(<App />,document.getElementById("root")) 