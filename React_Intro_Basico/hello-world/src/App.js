/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
// import logo from './logo.svg';

import './App.css';
import { Component } from 'react';

import { PostCard } from './components/PostCard';

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

    posts: []
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

  // Trabalhando com dados externos e Lifecycle.
  componentDidMount() {

    this.loadPosts();

    // Trabalhando com Fetch API
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(posts => this.setState({ posts }))
  }

  // Utilizando uma forma melhor para trabalhando com dados externos.
  loadPosts = async () => {

    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    //console.log(posts);

    const postsJson = await posts.json();
    const photosJson = await photos.json();
    //console.log(postsJson.map(p => p.id + 'OI'));

    // Isso se chama ziper, pegar dentro de um array informações para,
    // se juntar a outro.
    const postsAndPhotos = postsJson.map((posts, index) => {
      return { ...posts, imagem: photosJson[index].url }
    })

    this.setState({ posts: postsAndPhotos });
  }

  render() {

    // const { name, counter } = this.state;
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {/* Trabalhando com Arrays */}
          {posts.map(post => (
            <PostCard key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
              imagem={post.imagem}
            />
          ))}
        </div>
      </section >
    );

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

  }

}

// function App() {
// }

export default App;
