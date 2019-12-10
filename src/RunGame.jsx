import React from "react"

class RunGame extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      result: "Play the game",
      user: " Choose your Weapon",
      computer: " is waiting... TO DESTROY YOU",
      compCount: 0,
      userCount: 0
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
      return "It's a tie"
    } else if (userInput === "rock" && compInput === "paper") {
      this.increaseComputer()
      return "Computer Wins!"
    } else if (userInput === "rock" && compInput === "scissors") {
      this.increaseUser()
      return "You Win!"
    } else if (userInput === "paper" && compInput === "scissors") {
      this.increaseComputer()
      return "Computer Wins!"
    } else if (userInput === "paper"  && compInput === "rock") {
      this.increaseUser()
      return "You Win!"
    } else if (userInput === "scissors" && compInput === "paper") {
      this.increaseUser()
      return "You Win!"
    } else {
      this.increaseComputer()
      return "Computer Smashes You!"
    }
  } 

  increaseComputer() {
    this.setState({
    compCount: this.state.compCount + 1
    });
  };

  increaseUser() {
    this.setState({
    userCount: this.state.userCount + 1
    });
  };

  resetScore() {
    this.setState({
    result: "Play the game",
    user: " Choose your Weapon",
    computer: " is waiting... TO DESTROY YOU",
    userCount: 0,
    compCount: 0
    });
  };

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
    const {result, user, computer, compCount, userCount } = this.state;
    return (
      <div>
        <h1>Rock Paper Scissors</h1>
        <button onClick={() => this.handleClick("rock")}>Rock</button>
        <button onClick={() => this.handleClick("paper")}>Paper</button>
        <button onClick={() => this.handleClick("scissors")}>Scissors</button>
        <div>
          <button className='reset' onClick={() => this.resetScore()}>Reset</button>
        </div>          
        <p>{result}</p>
        <p>Player: {user}</p>
        <p>Computer: {computer}</p>
        <p>Computer's Score! {compCount}</p>
        <p>Your Score! {userCount}</p>
      </div>
    )
  }
}

export default RunGame