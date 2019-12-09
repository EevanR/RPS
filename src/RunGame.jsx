import React from "react"

class RunGame extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      result: "Play the game"
    }
  }

  handleClick(userInput) {
    this.setState({ result: runGame(userInput) })
    function runGame (userInput) {
      const compGenerate = () => {
        let computer = Math.floor(Math.random()*3)
        if (computer == 2) {
          return "rock"
        } else if (computer == 1) {
          return "paper"
        } else {
          return "scissors"
        };
      }

      let compInput = compGenerate()
      console.log(compInput);

      if (userInput === compInput) {
        return "It's a tie Muthafuckas!"
      } else if (userInput === "rock" && compInput === "paper") {
        return "Computer Wins!"
      } else if (userInput === "rock" && compInput === "scissors") {
        return "You Win!"
      } else if (userInput === "paper" && compInput === "scissors") {
        return "Computer Wins!"
      } else if (userInput === "paper"  && compInput === "rock") {
        return "You Win!"
      } else if (userInput === "scissors" && compInput === "paper") {
        return "You Win!"
      } else {
        return "Computer Smashes You!"
      }
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick("rock")}>Rock</button>
        <button onClick={() => this.handleClick("paper")}>Paper</button>
        <button onClick={() => this.handleClick("scissors")}>Scissors</button>
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default RunGame