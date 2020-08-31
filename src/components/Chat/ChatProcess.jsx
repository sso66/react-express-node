// File: ChatProcess.jsx
// Date: 8/29/2020
// Note: The official WebSocket chat process component - UIViewController
//................................................................................
import React, { Component } from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatOutput'
import './Chat.sass'

console.log("Mounting ChatProcess.jsx...");

// URL = PROTOCOL://HOST:PORT
const URL = 'ws://localhost:3030'

// Create component that will be the center logic. It holds
// the state object, the connection and also send and receive messages.

class ChatProcess extends Component {
  state = {
    name: '',
    messages: [],
  }

  ws = new WebSocket(URL)

  componentDidMount() {
    this.ws.onopen = openEvent => {
      // on connecting, do nothing but log it to the console
      console.log('connected' + openEvent.data)
    }
    
    this.ws.onError = errorEvent => {
      console.error('error: ' + errorEvent.code)
    }

    this.ws.onmessage = messageEvent => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(messageEvent.data)
      this.addMessage(message)
    }

    this.ws.onclose = closeEvent => {
      console.log('disconnected' + closeEvent.data)
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to 
    // the list and reset the input
    const message = { name: this.state.name, message: messageString }
    this.ws.send(JSON.stringify(message))
    this.addMessage(message)
  }

  render() {
    return (
      <div className="chat">
        <label htmlFor="name">
          Name:&nbsp;
          <input
            type="text"
            id={'name'}
            placeholder={'Enter name...'}
            value={this.state.name}
            onChange={
              e => this.setState({ name: e.target.value })
            }
          />
        </label>
        <ChatInput
          // ws={this.ws}
          onSubmitMessage={
              messageString => this.submitMessage(messageString)
          }
        />
        {this.state.messages.map((message, index) =>
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
          />,
        )}
      </div>
    )
  }
}

// It creates a new WebSocket instance and adds handlers for messages
// as well as opening and closing connection. It passes the onSubmitMessage
// prop to ChatInput which actually sends the message to the Node.js backend
// chat-server.js running on 127.0.0.1 port:3030.

export default ChatProcess

// eof
