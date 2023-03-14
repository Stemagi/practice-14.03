import React from "react";
import Jokes from "./jokes";
export default function(){
  return(
    <div>
      <h1>Шутки за 300</h1>
      <hr />
      <Jokes 
      joke="- В чем плюс слепой проститутки?"
      punchline="- Сосет не смотря ни на что!"/>
      <Jokes joke="Иван" />
      <Jokes joke="Я" />
      <Jokes joke="Искал шутки" />
      <Jokes joke="Но мне стало слишком кринжово" />
    </div>
  )
}