// File: components/UserAccount/Connection.jsx
// Date: 8/17/2020
// Note: WebSocket server implementation with 'websocket' NPM

import React from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import './Connection.sass';


console.log("Mounting w3c_websocket.js...\n\n");
// A simple React.jsx client using W3C WebSocket API with echo-protocol.

const client = new W3CWebSocket('ws://127.0.0.1:8080/');

class Echo extends React.Component {
    state = {
        message: "Hello W3C WebSocket!",
    }

    componentDidMount() {
        client.onopen = () => {
            this.setState({ message: 'W3C WebSocket Client Connected.' });

            // send message to server...
            function sendNumber() {
                if (client.readyState === client.OPEN) {
                    // 0xFFFFFF hex value equivalent to 1677725 decimal value
                    let number = Math.round(Math.random() * 0xFFFFFF); 
                    client.send(number.toString());
                    setTimeout(sendNumber, 1000)
                }
            }
            sendNumber();
        }
    
        client.onclose = (event) => {
            console.log('echo-protocol Client Closed - ' 
                + ' CODE: '
                + event.code  
                + ' | REASON: '
                + event.reason 
                + ' | WAS_CLEAN: '
                + event.wasClean);
        };
    
        // receive messages from the server
        client.onmessage = (event) => {
            if (typeof event.data === 'string') {
                console.log("Received: '" + event.data + "'");
                this.setState({ message: <div className='echo'>{event.data}</div> });
            }
        };
    }
    
    componentWillUnmount() {
        client.close();
    }

    render() {
        return (
            <div className='echo'>
                {this.state.message}
            </div>
        )
    }
}

export default Echo;

// eof