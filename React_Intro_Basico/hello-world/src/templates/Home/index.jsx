/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
// import logo from './logo.svg';

import './styles.css';
import { Component } from 'react';

import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { loadPosts } from '../../utils/load-posts';

class Home extends Component {

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

    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
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
  async componentDidMount() {

    await this.loadPosts();

    // Trabalhando com Fetch API
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(posts => this.setState({ posts }))
  }

  // Utilizando uma forma melhor para trabalhando com dados externos.
  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {

    const { posts, allPosts, page, postsPerPage } = this.state;
    const nextPosts = posts.length + postsPerPage;

    // const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    // posts.push(...nextPosts);
    // this.setState({ posts, page: nextPage });

    this.setState({
      posts: allPosts.slice(page, nextPosts)
    })
  }

  render() {

    // const { name, counter } = this.state;
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />

        <Button
          text="Carregar mais Posts"
          onClick={this.loadMorePosts}
        />

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

export default Home;
