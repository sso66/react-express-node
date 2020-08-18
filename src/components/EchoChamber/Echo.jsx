// File: components/EchoChamber/Echo.jsx
// Date: 8/18/2020
// Note: WebSocket client implementation with 'websocket' NPM

import React from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import './Echo.sass';

// A simple React.jsx client using W3C WebSocket API with echo-protocol.
console.log("\nMounting Echo.jsx (a.k.a. w3c_websocket.js)...");

const client = new W3CWebSocket('ws://127.0.0.1:8080/', 'echo-protocol');

class Echo extends React.Component {
    state = {
        message: "Hello W3C WebSocket!",
    }

    componentDidMount() {
        client.onopen = () => {
            this.setState({ message: 'W3C WebSocket Client Connected.' });

            // send messages to server...
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
    
        // ...receive messages from the server
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
