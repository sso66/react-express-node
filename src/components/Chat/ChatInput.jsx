// File: ChatInput.jsx
// Date: 8/13/2020
// Note: Chat user input component

import React from 'react';
import PropTypes from 'prop-types';
//import './Chat.sass';

console.log("Mounting ChatInput.jsx...\n");

class ChatInput extends React.Component {
    static propTypes = {
        onSubmitMessage: PropTypes.func.isRequired,
    }
    state = {
        message: '',
    }

    render() {
        return (
            <form
                action="."
                onSubmit = {e => {
                    e.preventDefault()
                    this.props.onSubmitMessage(this.state.message)
                    this.setState({ message: '' })
                }}
            >
                <input 
                    type="text"
                    placeholder={'Enter message...'}
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}
                />
                <input type="submit" value={'Send'} />
            </form>
        )
    }
}

export default ChatInput;

// eof
