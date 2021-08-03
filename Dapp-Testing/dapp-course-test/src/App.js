import './App.css';
import { Component } from 'react';

const Web3 = require("web3");
const web3 = new Web3();


class Home extends Component {

  initialize = async () => {
    // Caso não tenha a extensão instalada no navegador retorna a msg.
    if (!await this.loadWeb3()) {
      alert("Porfavor instale uma carteira metamask.")
    }

    await this.getAccounts();
  }

  loadWeb3 = async () => {

    // window.ethereum verifica se existe uma extensão do metamask.
    if (window.ethereum) {
      // Criando um novo objeto de Web3.
      // const web3 = new Web3(window.ethereum);
      // Abrindo a Janela de conexão com o MetaMask.
      window.ethereum.enable();
      // Retornando valor Positivo.
      return true;
    }

    return false;
  }

  getAccounts = async () => {
    const accounts = await window.ethereum.send('eth_requestAccounts');
    console.log(accounts)
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
