import './App.css';
import { Component } from 'react';

const Web3 = require("web3");




class Home extends Component {

  initialize = async () => {
    if (!await this.loadWeb3()) {
      alert("Porfavor instale uma carteira metamask.")
    }
  }

  loadWeb3 = async () => {

    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      return true;
    }

    return false;
  }

  render() {

    return (

      <div className="App" >
        <h1>Hello Amigos!!</h1>

        <button
          type="submit"
          onClick={this.initialize}
        >
          Conectar MetaMask
        </button>

      </div >

    )
  }

}

export default Home;
