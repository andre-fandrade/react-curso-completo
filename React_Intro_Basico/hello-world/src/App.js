import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props)
    this.handlePclick = this.handlePclick.bind(this);

    this.state = {
      name: 'André Felipe',
      age: 27
    }
  }

  soma(valor) {
    return parseInt(valor) + 1;
  }

  handlePclick(valor) {
    const { age } = this.state;

    console.log(`My age is: ${age}`);
    document.querySelector('.age-cl').innerHTML = `My age is: ${age}`;

    this.setState({ age: this.soma(age) });
  }

  render() {

    const { name } = this.state;

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>My name is: {name}</p>
          <p onClick={this.handlePclick} className="age-cl"> Click para ver idade: </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    );

  }

}

// function App() {
// }

export default App;
