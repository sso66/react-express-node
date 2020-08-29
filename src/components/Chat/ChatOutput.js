// File: ChatOutput.jsx
// Date: 8/29/2020
// Note: Chat message output component - UIViewModel

import React from 'react';

console.log("Mounting ChatOutput.jsx...\n");

export default ({ name, message }) =>
  <p>
    <strong>{name}</strong> <em>{message}</em>
  </p>
