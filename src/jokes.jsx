import React from "react";
export default function Jokes(props){
  return(
  <div>
    {props.joke &&  <h3>Setup {props.joke}</h3>}
    <p>Punchline {props.punchline}</p>
    <hr />
  </div>
  )
}