import React from 'react';
import './App.css';

class Calculator extends React.Component {
  state = {
      total: 0,
      keyPadSum: '',
      display: 0,
      action: ''
  }
  componentWillMount() {
    this.setState({
      total: this.state.total,
      keyPadSum: this.state.keyPadSum,
      display: this.state.display,
      action: this.state.action
    })
    console.log('componentWillMount:', this.state);
  }  

clearkeyPadSum = () => {
  this.setState({
  keyPadSum: ''
  })  
}
add = (num) => {
  this.setState({
  total:  (parseInt(this.state.total,10) + parseInt(this.state.keyPadSum,10)),
  action: 'add'
  })
  this.clearkeyPadSum();
  console.log(this.state);
}
subtract = (num) => {
  this.setState({
  total: parseInt(this.state.total,10) - parseInt(this.state.keyPadSum,10),
  action: 'subtract'
  })
  this.clearkeyPadSum();
  console.log(this.state);
}
multiply = (num) => {
  this.setState({
  total: parseInt(this.state.keyPadSum,10) * parseInt(this.state.total,10),
  action: 'multiply'
  })
  this.clearkeyPadSum();
  console.log(this.state);
}
divide = (num) => {
  this.setState({
  total: parseInt(this.state.total,10) / parseInt(this.state.keyPadSum,10),
  action: 'divide'
  })
  this.clearkeyPadSum();
  console.log(this.state);
}
equal = () => {
  if (this.state.action === 'add'){
    this.setState({
      total:  parseInt(this.state.total,10) + parseInt(this.state.keyPadSum,10)
    })
  }
  if (this.state.action === 'subtract'){
    this.setState({
      total: (parseInt(this.state.total,10) - parseInt(this.state.keyPadSum,10))
    })
  }
  if (this.state.action === 'multiply'){
    this.setState({
      total: (parseInt(this.state.keyPadSum,10) * parseInt(this.state.total,10))
    })
  }
  if (this.state.action === 'divide'){
    this.setState({
      total: (parseInt(this.state.total,10) / parseInt(this.state.keyPadSum,10))
    })
  }
  this.updateDisplay('total'); 
  console.log(this.state);
}
clearCalculator = (event) => {
  this.setState({
    total: 0,
    keyPadSum: '',
    display: 0,
    action: ''
  })
  console.log(this.state);
}

pushKeyPad = event => {
  this.setState({
    keyPadSum: this.state.keyPadSum += event.currentTarget.textContent 
  })
  this.updateDisplay('keyPadSum');
  console.log(this.state);
}

updateDisplay = (update) => {
  if (update === 'total'){
    this.setState({
      display: this.state.total
    })
    return;
  }
  this.setState({
    display: this.state.keyPadSum
  })
}
  
  render() {
    return (
        <section className="c-cal-section">
          <div className="c-cal-wrapper">
            <div className="c-cal_display">{this.state.display}</div> 
            <button type="button" name="clear" onClick={this.clearCalculator} className="btn btn--clear">ac</button>
            <button type="button" name="pos-neg" className="btn btn--pos-neg">+/-</button>
            <button type="button" name="percent" className="btn btn--percent">&#37;</button>
            <button type="button" name="period" onClick={this.pushKeyPad} className="btn btn--period">&#46;</button>    
            <button type="button" name="one" onClick={this.pushKeyPad} className="btn btn--one">1</button>
            <button type="button" name="two" onClick={this.pushKeyPad} className="btn btn--two">2</button>
            <button type="button" name="three" onClick={this.pushKeyPad} className="btn btn--three">3</button>
            <button type="button" name="four" onClick={this.pushKeyPad} className="btn btn--four">4</button>
            <button type="button" name="five" onClick={this.pushKeyPad} className="btn btn--five">5</button>
            <button type="button" name="six" onClick={this.pushKeyPad} className="btn btn--six">6</button>
            <button type="button" name="seven" onClick={this.pushKeyPad} className="btn btn--seven">7</button>
            <button type="button" name="eight" onClick={this.pushKeyPad} className="btn btn--eight">8</button>
            <button type="button" name="nine" onClick={this.pushKeyPad} className="btn btn--nine">9</button>
            <button type="button" name="zero" onClick={this.pushKeyPad} className="btn btn--zero">0</button>            
            <button type="button" name="divide" onClick={this.divide} className="btn btn--divide">&#247;</button>
            <button type="button" name="multiply" onClick={this.multiply} className="btn btn--multiply">&#215;</button>
            <button type="button" name="subtract" onClick={this.subtract} className="btn btn--subtract">&#8722;</button>
            <button type="button" name="add" onClick={this.add} className="btn btn--add">&#43;</button>
            <button type="button" name="equal" onClick={this.equal} className="btn btn--equal">&#61;</button>
          </div>
        </section>
    )
  }
}

export default Calculator;