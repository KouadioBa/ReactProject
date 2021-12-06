import React, { Component } from "react";
import Car from "./Car";

class Mycars extends Component{

  // noCopy = () => {
  //   alert('Merci de ne pas copier ce message');
  // }
  
  // addStyle = (c) => {
  //   if(c.target.classList.contains('styled')){
  //     c.target.classList.remove('styled');
  //   }else{
  //     c.target.classList.add('styled');
  //   }
  // }

  state = {
    voitures: [
      {name: 'Ford', color: 'red', year: 2000},
      {name: 'Mercedes', color: 'black', year: 2010},
      {name: 'Peugeot', color: 'green', year: 2018},
    ]
  }

  addTenYears = () => {
    
    const updatedState = this.state.voitures.map((param) => {
      return param.year -= 10;
    })

    this.setState([
      updatedState
    ])


  }

  render(){

    const year = new Date().getFullYear();

    return (
      <div>
        {/* onMouseOver={this.addStyle} */}

        <h1>{this.props.title}</h1>

        <button onClick={this.addTenYears}> + 10 ans</button>

        {/* <p onCopy={this.noCopy}>Je veux juste faire un test pour mettre en évidence onCopy</p> */}

        <Car color={this.state.voitures[0].color} year={year - this.state.voitures[0].year + 'ans'}>{this.state.voitures[0].name}</Car>
        <Car color={this.state.voitures[1].color} year={year - this.state.voitures[1].year + 'ans'}>{this.state.voitures[1].name}</Car>
        <Car color={this.state.voitures[2].color} year={year - this.state.voitures[2].year + 'ans'}>{this.state.voitures[2].name}</Car>
      </div>
    )
  }
}

export default Mycars;