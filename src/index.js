import React from "react"
import ReactDOM from "react-dom"
import RunGame from "./RunGame"

const App = () => {
  return  (
    <>
      <RunGame />
    </>
  )
}


ReactDOM.render(<App />, document.getElementById("app"))