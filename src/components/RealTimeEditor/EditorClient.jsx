// File: components/CopyEditor/EditorClient.jsx
// Date: 8/19/2020
// Note: Websockets: How to go real-time with Node.js and React.jsx
//..............................................................................
import React from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

import Identicon from 'react-identicons';
import {
  Navbar,
  NavbarBrand,
  UncontrolledTooltip
} from 'reactstrap';
import Editor from 'react-medium-editor';

import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
// import './EditorClient.css';
import './EditorClient.sass';

console.log( "Mounting EditorClient.jsx..." );

const client = new W3CWebSocket('ws://127.0.0.1:8000');
const contentDefaultMessage = "Start writing your document here";

// constants
const messageType = {
    USER_EVENT: "userevent",
    CONTENT_CHANGE: "contentchange"
}

class EditorClient extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUsers: [],
            userActivity: [],
            username: null,
            text: ''
        };
    }

    logInUser = () => {
        const username = this.username.value;

        if (username.trim()) {
            const data = { 
                username 
            };
            this.setState({...data}, () => {
                // send username to server 
                client.send(JSON.stringify({
                    ...data,
                    type: messageType.USER_EVENT
                }));
            });
        }
    }

    onEditorStateChange = (text) => {
        // When content changes, send the current content of the editor to the server.
        client.send(JSON.stringify({
            type: messageType.CONTENT_CHANGE,
            username: this.state.username,
            content: text,
        }));
    };

    componentDidMount() {
        // client.onerror = (event) => {
        //     console.log(event.id + " : " + event.name);
        // }

        client.onopen = () => {
            console.log('WebSocket Client Connected');
        }

        client.onmessage = (event) => {
            // receive assorted types of data packets from server
            const dataFromServer = JSON.parse(event.data);
            const stateToChange = {};

            if (dataFromServer.type === messageType.USER_EVENT) {
                stateToChange.currentUsers = Object.values(dataFromServer.data.users);
            } else if (dataFromServer.type === messageType.CONTENT_CHANGE) {
                stateToChange.text = dataFromServer.data.editorContent || contentDefaultMessage;
            }
            stateToChange.userActivity = dataFromServer.data.userActivity;
            
            this.setState({
                ...stateToChange
            });
        }

        // client.onclose = (event) => {
        //     console.log('Close the connection.')
        // }
    }

    showLoginSection = () => (
        <div className="account">
            <div className="account__wrapper">
                <div className="account__card">
                    <div className="account__profile">
                        <Identicon 
                            className="account__avatar" 
                            size={64} 
                            string="randomness" />
                        <p className="account__name">Hello, user!</p>
                        <p className="account__sub">Join to edit the document</p>
                    </div>

                    <input 
                        name="username" 
                        ref={(input) => { this.username = input; }} 
                        className="form-control" 
                        autoComplete='off' />

                    <button 
                        type="button" onClick={() => this.logInUser()} 
                        className="btn btn-primary account__btn">
                            Join
                    </button>
                </div>
            </div>
        </div>
    )

    showEditorSection = () => (
        <div className="main-content">
            <div className="document-holder">
                <div className="currentusers">
                    {this.state.currentUsers.map(user => (
                    <React.Fragment>
                        <span 
                            id={user.username} 
                            className="userInfo" 
                            key={user.username}
                        >
                            <Identicon 
                                className="account__avatar" 
                                style={{ backgroundColor: user.randomcolor }} 
                                size={40} 
                                string={user.username} />
                        </span>
                        <UncontrolledTooltip 
                            placement="top" 
                            target={user.username}>
                            {user.username}
                        </UncontrolledTooltip>
                    </React.Fragment>
                    ))}
                </div>
                <Editor
                    options={{
                        placeholder: {
                            text: this.state.text ? contentDefaultMessage : ""
                        }
                    }}
                    className="body-editor"
                    text={this.state.text}
                    onChange={this.onEditorStateChange}
                />
            </div>
            <div className="history-holder">
                <ul>
                    {this.state.userActivity.map((activity, index) => 
                        <li key={`activity-${index}`}>
                            {activity}
                        </li>)}
                </ul>
            </div>
        </div>
    )   

    render() {
        const { username } = this.state;
        return (
            <React.Fragment>
                <Navbar 
                    color="light" 
                    light
                >
                    <NavbarBrand href="/">Real-time document editor</NavbarBrand>
                </Navbar>
                <div className="container-fluid">
                    {username ? this.showEditorSection() : this.showLoginSection()}
                </div>
            </React.Fragment>
        );
    }
}

export default EditorClient;

// eof 
