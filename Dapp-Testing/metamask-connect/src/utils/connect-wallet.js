import {Component} from "react";
import {checkExtension} from "./check-extension";

export class ConnectWallet extends Component {


  render() {

    const {textBtn, status, link} = checkExtension()


    if (status) {
      function connect() {
        const {ethereum} = window
        ethereum.request({method: "eth_requestAccounts"})
      }

      return (
        <div>
          <button onClick={connect}>{textBtn}</button>
        </div>
      )
    } else {
      return (
        <div>
          <button>{textBtn}</button>
        </div>
      )
    }
  }
}