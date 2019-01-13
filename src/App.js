import React, { Component } from 'react';
import './App.css';
import Person from './Person/Persion'
class App extends Component {
  state = {
    person:[
    { name:'neeraj', age: 100 },
    { name:'joy', age: 211 }
    ]
  }//state

  switchNameHandler = () => {
    //console.log("switch name is called");
    this.setState({
      person:[
      { name:'neeraj_sharma', age: 100 },
      { name:'joy', age: 211 }
      ]
    })//setState
  }//switchNameHandler

  render() {
    return (
      <div className="App">
        <h1>hello i am react</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
         name = {this.state.person[0].name} 
         age = {this.state.person[0].age}
         click = {this.switchNameHandler} 
         />
        <Person name = {this.state.person[1].name} age={this.state.person[1].age}>This is a children text</Person>
      </div>
    );

    //return React.createElement('div',{className:"App"},React.createElement('h1',null,'vadiya ji'));


  }//render
}

export default App;
