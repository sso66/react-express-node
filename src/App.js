import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/ChatRoom/Chat';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiResponse: '',
    }
  }

  callAPI() {
    console.log("callAPI...");

    fetch("http://localhost:9000/testAPI")
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
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
            <p>messages: {this.state.apiResponse}</p>
        </div>
        <Chat />
      </div>
    );

  }
}

export default App;

// eof
