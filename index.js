import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Tabs from './Comps/Tabs'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  componentDidMount() {
    this.hey()
  }

  hey = function() {
    console.log(this)
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Tabs />
      </div>
    );
  }
}



render(<App />, document.getElementById('root'));
