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
      this.setScore(1, 0)
      return "Computer Wins!"
    } else if (userInput === "rock" && compInput === "scissors") {
      this.setScore(0, 1)
      return "You Win!"
    } else if (userInput === "paper" && compInput === "scissors") {
      this.setScore(1, 0)
      return "Computer Wins!"
    } else if (userInput === "paper"  && compInput === "rock") {
      this.setScore(0, 1)
      return "You Win!"
    } else if (userInput === "scissors" && compInput === "paper") {
      this.setScore(0, 1)
      return "You Win!"
    } else {
      this.setScore(1, 0)
      return "Computer Smashes You!"
    }
  } 

  setScore(arg1, arg2) {
    this.setState({
      compCount: this.state.compCount + arg1,
      userCount: this.state.userCount + arg2
    })
  }

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
      <div className="main">
        <div className="divTop">
          <h1>Rock Paper Scissors <span className="span">for the galaxy...</span></h1>
          <p>{result}</p>
        </div >
        <div id="centerText" className="divMid">
          <div className="stretchDiv">
          </div>
          <div id="toBack">
            <p>Player: {user}</p>
            <button onClick={() => this.handleClick("rock")}>Rock</button>
            <button onClick={() => this.handleClick("paper")}>Paper</button>
            <button onClick={() => this.handleClick("scissors")}>Scissors</button>
            <p>Computer: {computer}</p>
          </div>
        </div>
        <div className="divbottom">
          <p id="compScore">Computer's Score! {compCount}</p>
          <p>Your Score! {userCount}</p>
          <button className='reset' onClick={() => this.resetScore()}>Reset</button>
        </div>
      </div>
    )
  }
}

export default RunGame