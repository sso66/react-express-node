// File: App.jsx
// Date: 8/20/2020
// Note: Main entry point: UIApplication/UIView

import React from 'react';
// import logo from './logo.svg';
import './App.sass';
import Chat from './components/ChatRoom/Chat';
// import Echo from './components/EchoChamber/Echo';
// import Connection from './components/UserAccount/Connection';
// import EditorClient from './components/RealTimeEditor/EditorClient';

const URL = "http://localhost:9000/testAPI";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiResponse: '',
    }
  }

  callAPI() {
    console.log("callAPI...");

    fetch(URL)
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    // this.callAPI();
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.jsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Component API
          </a>
        </header>
        <div className='fetch-api'>
            <p>Message: {this.state.apiResponse}</p>
        </div> */}
        <Chat />
        {/* <Echo /> */}
        {/* <Connection /> */}
        {/* <EditorClient /> */}
      </div>
    );

  }
}

export default App;

// eof
