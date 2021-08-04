import {Component} from "react";
import {checkExtension} from "./check-extension";

export class ConnectWallet extends Component {

  state = {
    walletConnected: window.ethereum._state.isConnected
  }

  componentDidMount() {
    this.eth()
    this.isConnect()
  }

  eth = () => {
    const {ethereum} = window
    return ethereum
  }

  isConnect = () => {
    const address = this.eth().selectedAddress
    if (!address === '') {
      this.setState({walletConnected: true})
    }
  }

  connect = async () => {
    await this.eth().request({method: "eth_requestAccounts"})
      .catch(error => {
        const {message} = error
        alert(`Error: ${message}`)
      })
  }

  render() {

    const {textBtn, status, link} = checkExtension()
    const {walletConnected} = this.state

    if (status && !walletConnected) {
      return (
        <div>
          <button onClick={this.connect}>{textBtn}</button>
        </div>
      )
    }

    if (!status && walletConnected) {
      return (
        <div>
          <a href={link}>{textBtn}</a>
        </div>
      )
    }

    if (walletConnected) {
      return (
        <div>
          <h2>{this.eth().selectedAddress}</h2>
        </div>
      )
    }
  }
}