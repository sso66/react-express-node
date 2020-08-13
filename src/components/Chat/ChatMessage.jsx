// File: ChatMessage.jsx
// Date: 8/13/2020
// Note: Chat message component

import React from 'react';
import './Chat.sass';

console.log("Mounting ChatMessage.jsx...\n");

export default ({ name, message }) => 
    <p>
        <strong>{name}</strong> <em>{message}</em>
    </p>


// eof