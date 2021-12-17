import React, { Component } from 'react';
import './styles/Dashboard.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`https://www.example.com/get-data/${id}/`)
      .then(res => res.json())
      .then(data => {
        const response = new Response_D(data);
        this.setState({ response });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Dashboard">
        handleOnClick={this.handleOnClick}
        pokemon={this.state.pokemon}
      </div>
    );
  }
}

export default App;