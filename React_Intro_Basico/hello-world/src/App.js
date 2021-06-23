// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {

  // Utilizando construtor dentro da classe.
  // constructor(props) {
  //   super(props)
  //   this.handlePclick = this.handlePclick.bind(this);

  //   this.state = {
  //     name: 'André Felipe',
  //     age: 27
  //   }
  // }

  // Utilizando Class Fields
  state = {

    // name: 'Andre Felipe',
    // age: 27,
    // counter: 0

    posts: [
      {
        id: 1,
        title: 'Titulo 1',
        body: 'Corpo 1'
      },
      {
        id: 2,
        title: 'Titulo 2',
        body: 'Corpo 2'
      },
      {
        id: 3,
        title: 'Titulo 3',
        body: 'Corpo 3'
      },
    ]

  }

  // Utilizando o Arrow Functions para não precisar chamar this.
  // handlePclick = () => {
  //   const { age } = this.state;

  //   console.log(`My age is: ${age}`);
  //   document.querySelector('.age-cl').innerHTML = `My age is: ${age}`;

  //   this.setState({ age: age + 1 });
  // }

  // handleAclick = (event) => {
  //   // Usando Eventos
  //   event.preventDefault();
  //   const { counter } = this.state;
  //   this.setState({ counter: counter + 1 })
  // }

  render() {

    // const { name, counter } = this.state;
    const { posts } = this.state;

    return (

      <div className="App">

        {/* Trabalhando com Arrays */}

        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>My name is: {name}</p>
          <p onClick={this.handlePclick} className="age-cl"> Click para ver idade: </p>
          <a onClick={this.handleAclick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React {counter}
          </a>
        </header> */}

      </div>

    );

  }

}

// function App() {
// }

export default App;
