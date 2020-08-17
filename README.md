## React-Express-Node-CouchDB
### Project Code Organization for Production
### Eagleton Web App Consulting...Real-Time Web, Delivered
- api/
  - bin/
    - www (index.js)
  - caches /
    - default.json
    - movies.js
    - employees.js
  - constants/
  - db/
    - controllers/
      - deleteMessage.js
      - deleteProduct.js
      - deleteUser.js
      - getMessage.js
      - getMessages.js
      - getProduct.js
      - getProducts.js
      - getUser.js
      - getUsers.js
      - index.js
      - updateMessage.js
      - updateProduct.js
      - updateUser.js
      - saveMessage.js
      - saveProduct.js
      - saveUser.js
    - docs/
      - crud.txt
      - curl.txt
    - errors/
      - error.js
      - expressBoom.js
      - index.js
    - models/
      - index.js
      - message.js
      - message.json
      - messages.json
      - product.js
      - product.json
      - products.js
      - user.js
      - user.json
      - users.js
    - prototypes/
      - index.js
      - message_insert_test.js
      - message_update.test.js
      - product_insert_test.js
      - product_update_test.js
      - user_insert_test.js
      - user_update_test
    - routes/
      - index.js
    - schemas/
      - index.js
      - user.js
    - services/
      - couchdb.js
      - create_db.js
      - index.js
      - init_couch.js
    - app.js
  - node_modules/
  - public/
    - images/
      - arch.jpg
      - favicon.ico
      - octalhex.git
      - octalhex-alpha.png
      - octalhex-opaque.png
      - planet-earth.png
    - javascripts/
      - public/
        - images
          logo.gif
        - 404.html
        - about.html
        - home.html
      - fortune.js
      - hello-node.js
      - hello-node-http-server.js
      - helloWorld-1.js
      - helloWorld-2.js
      - helloWorld-3.js
      - helloWorld-express.js
      - httpModule.js
      - main.js
    - stylesheets/
      - reset.css
      - style.css
  - routes/
    - index.js
    - testAPI.js
    - users.js
  - utils/
  - views/
    - error.jade
    - index.jade
    - layout.jade
  - websockets/
    - bin/  
      - www (echo_protocol_server.js)
      - chat_server.js
      - connection_server.js
      - editor_server.js
      - constants/
    - nodejs_client.js
    - w3c_websocket.js
  - app.js
  - package.json
  - package-lock.json
  - README.md
- node_modules/
- public/
- src/
  - components/
    - ChatRoom/
      - Chat.jsx
      - Chat.sass
      - ChatInput.jsx
      - ChatMessage.jsx
      - index.jsx
    - CopyEditor/
    - EchoChamber/
      - Echo.jsx
      - Echo.sass
    - RealTimeWeb/
    - Site/
   - constants/
  - views/
    - Dashboard/
      - index.jsx
    - Home/
      - index.jsx
    - Login
      - index.jsx
   - README.md
