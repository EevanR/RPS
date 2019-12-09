import React from "react"
import ReactDOM from "react-dom"
import RunGame from "./RunGame"

const App = () => {
  return  (
    <>
      <h1>Rock Paper Scissors</h1>
      <RunGame />
    </>
  )
}


ReactDOM.render(<App />, document.getElementById("app"))