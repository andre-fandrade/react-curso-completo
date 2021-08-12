import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import {checkExtension} from "./utils/check-extension";
import {ConnectWallet} from "./utils/connect-wallet";


class App extends Component {


  componentDidMount() {
    console.log(checkExtension())
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <ConnectWallet/>

        </header>
      </div>
    );
  }
}

export default App;
