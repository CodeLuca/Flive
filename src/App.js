import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import axios from 'axios';

class App extends Component {
  sendAPI() {
    axios.get('http://198.211.125.38:3000/app/?SET-' + document.getElementById('input').value.replace('@', '')).then((res) => {
      document.getElementById('input').value = '';
    })
  }

  render() {
    return (
      <div className="App">
        <div className='header'>
          <img className='logo' src={logo} />
        </div>
        <div className='content'>
          <h3>
            Twitter Handle:
          </h3>
          <div className='inputs'>
            <input id='input' placeholder='@FliveApp' />
            <input onClick={this.sendAPI.bind(this)} className='submit' type='submit'></input>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
