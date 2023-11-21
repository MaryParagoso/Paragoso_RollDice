import React, { Component } from 'react';
import Die from './Die';
import './App.css';

class RollDice extends Component {
  static defaultProps = {
    diceSides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };

  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one',
      rolling: false,
      total: 0,
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const { diceSides } = this.props;
    const newDie1 = diceSides[Math.floor(Math.random() * diceSides.length)];
    const newDie2 = diceSides[Math.floor(Math.random() * diceSides.length)];
    const newTotal = this.calculateTotal(newDie1, newDie2);
    
    this.setState({
      die1: newDie1,
      die2: newDie2,
      rolling: true,
      total: newTotal,
    });
    setTimeout(() => {
      this.setState({ rolling: false });
      this.showTotalPopup();
    }, 1000);
  }

  calculateTotal(die1, die2) {
    const valueMap = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
    };
    return valueMap[die1] + valueMap[die2];
  }

  showTotalPopup() {
    alert(`You have total of ${this.state.total} pips.`);
  }

  render() {
    const handleBtn = this.state.rolling ? 'RollDice-rolling' : '';
    const { die1, die2, rolling } = this.state;
    return (
      <div className='RollDice'>
        <h1>Roll the Dice and Experience the Thrill!</h1>
        <div className='RollDice-container'>
          <Die face={die1} rolling={rolling} />
          <Die face={die2} rolling={rolling} />
        </div>
        <button className={handleBtn} disabled={this.state.rolling} onClick={this.roll}>
          {this.state.rolling ? 'Rolling' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
