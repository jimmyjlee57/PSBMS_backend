import React, { Component } from 'react';
import './../Styles/sample.css';

class Sample extends Component {
  state = {
    todos: []
  };
  async componentDidMount() {
    try {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://cse3311.herokuapp.com/api/expenses/'
      //const res = await fetch('https://cse3311.herokuapp.com/api/expenses/', {mode: 'cors'});
      const res = await fetch(proxyUrl+targetUrl);
      const todos = await res.json();
      this.setState({
        todos
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className='pos'>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.amount}</p>
            <p>{item.dateTime}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Sample;