## React-Express-Node-CouchDB: Project-Agnostic IWA
### Project Code Organization for Production
- api/
  - bin/
    - www
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
      - Nodes.js&CouchDB.pdf
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
    - schemas/
      - index.js
      - user.js
    - services/
      - couchdb.js
      - create_db.js
      - index.js
      - init_couch.js
    - tests/
      - index.js
      - message_insert_test.js
      - message_update.test.js
      - product_insert_test.js
      - product_update_test.js
      - user_insert_test.js
      - user_update_test
    - app.js
  - lib/
    - fortune.js
  - node_modules/
  - public/
    - images/
    - javascripts/
    - stylesheets/
  - routes/
    - index.js
    - messages.js
    - testAPI.js
    - users.js
  - utils/
  - views/
    - error.jade
    - index.jade
    - layout.jade
    - message.jade
    - messages.jade
    - product.jade
    - products.jade
    - testAPI.jade
    - user.jade
    - users.jade
  - app.js
  - favicon.ico
  - package.json
  - package-lock.json
  - README.md
- node_modules/
- public/
- src/
