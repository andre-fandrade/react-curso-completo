import logo from './logo.svg';
import './App.css';
import {Component} from "react";

const ApiWeb3Api = 'https://bsc-mainnet.web3api.com/v1/91HQ6E382FM4KPIC3WEN8XXNA1GDY2999V'

const ApiEndPoint = 'wss://apis.ankr.com/wss/d05ef20d2a694e81ada0094451832e02/c2f4c11a32b2a5b6ebeae4f6b1f66267/binance/full/main'
// Criando uma nova instancia do web3
const Web3 = require('web3')
// Criando e conectando o Objeto web3 ao provedor.
const web3 = new Web3(Web3.givenProvider || ApiEndPoint)

console.log(web3.eth)



class App extends Component {

  state = {
    account: '',
    connectButtonText: '',
  }

  componentDidMount() {

    this.MetaMaskClientCheck()
    this.getAccount()
  }

  // -------------------------------------- Conexão com a carteira MetaMask -------- //
  // Criando a função para checar se o MetaMask está instalado.
  isMetaMaskInstalled = () => {
    // Tem que verificar o vínculo ethereum no objeto janela para ver se ele está instalado
    const {ethereum} = window
    return Boolean(ethereum && ethereum.isMetaMask)
  }

  MetaMaskClientCheck = () => {
    // Agora verificamos se o MetaMask está instalado
    if (!this.isMetaMaskInstalled()) {
      // Caso não esteja instalado o MetaMask
      this.setState({connectButtonText: 'Click here to install MetaMask!'})
    } else {
      // Se estiver instalado
      this.setState({connectButtonText: 'Connect'})
    }

  }


  getAccount = async () => {
    await web3.eth.getAccounts()
      .then(r => this.setState({account: r}))
  }

  render() {

    const {account, connectButtonText} = this.state

    // https://github.com/BboyAkers/simple-dapp-tutorial/blob/master/finished/src/index.js
    // https://app.ankr.com/api/details/d05ef20d2a694e81ada0094451832e02/composer
    // https://docs.metamask.io/guide/create-dapp.html#basic-action-part-1
    // https://web3js.readthedocs.io/en/v1.4.0/web3-eth.html


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <br/>{account}

            <br/>
            <button>{connectButtonText}</button>

          </p>
        </header>
      </div>
    );
  }
}


export default App;

