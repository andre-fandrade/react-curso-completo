import {Component} from "react";
import {checkExtension} from "./check-extension";

export class ConnectWallet extends Component {

  render() {

    const {textBtn, status, link} = checkExtension()


    if (status) {
      async function connect() {
        const {ethereum} = window
        await ethereum.request({method: "eth_requestAccounts"})
          .catch(error => {
            const {message} = error
            console.log(`Error: ${message}`)
          })
      }

      return (
        <div>
          <button onClick={connect}>{textBtn}</button>
        </div>
      )
    } else {
      return (
        <div>
          <a href={link}>{textBtn}</a>
        </div>
      )
    }
  }
}