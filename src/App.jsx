// File: App.jsx
// Date: 8/29/2020
// Note: Main entry point to/from: UIApplication-UIView-UIComponent
//................................................................................
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.sass'

// import Chat from './components/Chat/ChatProcess'
// import Echo from './components/Echo/EchoProtocol';
// import Connection from './components/UserAccount/Connection';
// import EditorClient from './components/RealTimeEditor/EditorClient';
// import WebSocketURLClient from './components/WebSocket/WebSocketURLClient'

console.log("Mounting App.jsx...\n");

const URL = "http://localhost:9000/testAPI";  // connect to api/bin/www
// const URL = "http://localhost:9000/users";  // connect to api/bin/www


class App extends Component {
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
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='fetch-api'>
            <p>HTTP message: {this.state.apiResponse}</p>
        </div> 
        {/* <Chat /> */}
        {/* <Echo /> */}
        {/* <Connection /> */}
        {/* <EditorClient /> */}
        {/* <WebSocketURLClient /> */}
      </div>
    )
  }
}

export default App

// eof
