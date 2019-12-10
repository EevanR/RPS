import React from "react"

class RunGame extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      result: "Play the game",
      user: " Choose your Weapon",
      computer: " is waiting... TO DESTROY YOU"
    }
  }

  compGen() {
      let computer = Math.floor(Math.random()*3)
      if (computer == 2) {
        return "rock"
      } else if (computer == 1) {
        return "paper"
      } else {
        return "scissors"
      };
  }

  runGame(userInput, compInput) { 
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

  handleClick(userInput) {
    let compInput = this.compGen();
    let gameResult = this.runGame(userInput, compInput);
    this.setState({ 
      result: gameResult,
      user: userInput,
      computer: compInput
    })  
  }

  render() {
    const {result, user, computer} = this.state;
    return (
      <div>
        <button onClick={() => this.handleClick("rock")}>Rock</button>
        <button onClick={() => this.handleClick("paper")}>Paper</button>
        <button onClick={() => this.handleClick("scissors")}>Scissors</button>
        <p>{result}</p>
        <p>Player: {user}</p>
        <p>Computer {computer}</p>
      </div>
    )
  }
}

export default RunGame