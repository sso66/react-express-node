// File: URLClient.jsx
// Date: 8/28/2020
// Note: A simple WebSocket URL client connecting to echo.websocket.org server
//................................................................................
import React from 'react';
import './WebSocketURLClient.sass';

console.log("Mounting WebSocketURLClient.jsx...\n");

let webSocket = null;

class WebSocketURLClient extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ws_protocol: "ws",
            ws_hostname: "",
            ws_port: "",
            ws_endpoint: "",
            disabled: true,
            message: "",
            wsMsg: "",
        }

        this.onConnectClick = this.onConnectClick.bind(this);
        this.onDisconnectClick = this.onDisconnectClick.bind(this);
        this.onSendClick = this.onSendClick.bind(this);
    }

    onConnectClick() {
        this.openWSConnection(
            this.state.ws_protocol, 
            this.state.ws_hostname, 
            this.state.ws_port, 
            this.state.ws_endpoint
        );
    }

    onDisconnectClick() {
        this.setState({disabled: true});
        webSocket.close();
    }

    onSendClick() {
        // this.setState({disabled: true});

        if (webSocket.readyState !== WebSocket.OPEN) {
            console.error("webSocket is not open: " + webSocket.readyState);
            return;
        }

        webSocket.send(this.state.message)
    }

    openWSConnection(protocol, hostname, port, endpoint) {
        let websocketURL = 'ws://echo.websocket.org';      
        // websocketURL = protocol + "://" + hostname + ":" + port + "/" + endpoint;
        alert("openWSConnection::Connecting to : " + websocketURL);
        this.setState({disabled: false});
        try {
            webSocket = new WebSocket(websocketURL);
            
            webSocket.onopen = function(openEvent) {
                console.log("WebSocket OPEN: " + JSON.stringify(openEvent, null, 4));
            }

            webSocket.onclose = function(closeEvent) {
                console.log("WebSocket CLOSE: " + JSON.stringify(closeEvent, null, 4));  
            }

            webSocket.onerror = function(errorEvent) {
                console.log("WebSocket ERROR: " + JSON.stringify(errorEvent, null, 4));  
            }  

            webSocket.onmessage = function(messageEvent) {
                // Receive message from the server
                let wsMsg = messageEvent.data;
                console.log("WebSocket MESSAGE: " + wsMsg);
                if (wsMsg.indexOf("error") > 0) {
                    alert("error: " + wsMsg.error);
                } else {
                    alert("message: " + wsMsg);
                }
            }
        } catch (exception) {
            console.error(exception);
        }
    }

    render() {
        return (
            <div className='websocket-url-client'>
                <h2>Real-Time Web, Delivered!</h2>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td width="200px">WS Protocol</td>
                            <td>
                                <select 
                                    id="protocol" 
                                    onChange={e => this.setState({ ws_protocol: e.target.value })}>
                                    <option defaultValue="ws">{this.state.ws_protocol}</option>
                                    <option value="wss">wss</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>WS Hostname</td>
                            <td>
                                <input 
                                    type="text" 
                                    id="hostname" 
                                    value={this.state.ws_hostname} 
                                    onChange={e => this.setState({ ws_hostname: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>WS Port</td>
                            <td>
                                <input 
                                    type="text" 
                                    id="port" 
                                    value={this.state.ws_port} 
                                    onChange={e => this.setState({ ws_port: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>WS Endpoint</td>
                            <td>
                                <input 
                                    type="text" 
                                    id="endpoint" 
                                    value={this.state.ws_endpoint} 
                                    onChange={e => this.setState({ ws_endpoint: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    id="btnConnect"
                                    type="button"
                                    value="Connect"
                                    disabled={!this.state.disabled}
                                    onClick={this.onConnectClick} 
                                />
                                    &nbsp;&nbsp;
                                <input 
                                    id="btnDisconnect"
                                    type="button"
                                    value="Disconnect"
                                    disabled={this.state.disabled}
                                    onClick={this.onDisconnectClick} 
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <td width="200px">Message</td>
                            <td>
                                <input 
                                    type="text" 
                                    id="message" 
                                    value={this.state.message}
                                    onChange={e => this.setState({ message: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input 
                                    id="btnSend"
                                    type="button"
                                    value="Send Message"
                                    disabled={!this.state.message && this.state.disabled}
                                    onClick={this.onSendClick} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <textarea 
                    id="incomingMsgOutput" 
                    rows="10" 
                    cols="30"
                    onChange={e => this.setState({ wsMsg: e.target.value })} 
                    disabled={this.state.disabled} />
            </div>
        )
    }
}

export default WebSocketURLClient;

// eof