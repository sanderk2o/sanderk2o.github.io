import React from "react";
import ReactDOM from "react-dom";
import './index.css';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      date: null
    }
  }

  getSquares = () => {
    const array = []
    var expectedLifeLengthInWeeks = 4680  // 90 years
    var birthday = new Date(this.state.date);
    var today = new Date();
    var weeksLived = Math.round((today - birthday) / 604800000); 

    for(var i = 1; i <= expectedLifeLengthInWeeks; i++){
      if (i <= weeksLived) {
        array.push(
          <button className="filled-square"></button>)
      } else {
        array.push(
          <button className="empty-square"></button>)
      }
    }
    array.push(
      <h3> 90 years </h3>
    )
    return array
  }

  onBirthDateChange = (date) => {
    this.setState({
      date: date
    })
  }

  render(){
    if (this.state.date) {
      return(
        <div>
          <h1>Your life in weeks</h1>
          <BirthDate 
            onXXX={this.onBirthDateChange}
          />
          <div className="board-row">
            {this.getSquares()}
          </div>
        </div>
      )
    }
    return(
      <div>
        <h1>Your life in weeks</h1>
        <BirthDate 
          onXXX={this.onBirthDateChange}
        />
      </div>
    )
  }
}

class BirthDate extends React.Component {
  render() {
    return (
      <div>
        <h2>Choose your birth date</h2>
        <form>
          <label>
            <input type="date" name="birth-date" onChange={(event) => {
              this.props.onXXX(event.target.value)
            }} />
          </label>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);