import React from "react";
export default function Jokes(props){
  return(
  <div>
    <h3>{props.joke}</h3>
    <p>{props.punchline}</p>
    <hr />
  </div>
  )
}