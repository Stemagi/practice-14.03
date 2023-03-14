import React from "react";
import Jokes from "./jokes";
export default function(){
  return(
    <div>
      <h1>Funny jokes))</h1>
      <hr />
      <Jokes 
      joke="I got my daughter a fridge for her birthday."
      punchline="I can't wait to see her face light up when she opens it."/>
      {/* Ххппхпхп ладно, эта неплохая */}
      <Jokes 
      joke="How did the hacker escape the police?"
      punchline="He just ransomware!" 
       />
      <Jokes 
      joke="Why don't pirates travel on mountain roads?" 
      punchline="Scurvy."
      />
      <Jokes 
      joke="Why do bees stay in the hive in the winter?" 
      punchline="Swarm."
      />
      <Jokes 
      joke="What's the best thing about Switzerland?" 
      punchline="I don't know, but the flag is a big plus!" 
      />
      <Jokes 
      punchline="It’s hard to explain puns to kleptomaniacs because 
      they always take things literally."
      />
    </div>
  )
}