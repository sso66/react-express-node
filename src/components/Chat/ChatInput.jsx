// File: ChatInput.jsx
// Date: 8/29/2020
// Note: The official WebSocket chat user input component - UIView

import React, { Component } from 'react'
import PropTypes from 'prop-types'

console.log("Mounting ChatInput.jsx...\n");

class ChatInput extends Component {
  static propTypes = {
    // receive one prop from the parent component
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <input
          type="text"
          placeholder={'Enter WebSocket message...'}
          value={this.state.message}
          onChange={
            e => this.setState({ message: e.target.value })
          }
        />
        <input type="submit" value={'Send'} />
      </form>
    )
  }
}

export default ChatInput

// eof
