// resource_test.js

console.log("Mounting resource_test.js...");

var request = require('request'),
    querystring = require('querystring');

var url = 'http://127.0.0.1:5984';

console.log("Save a document");
exports.save = function(db, doc, done) {
    request.put({
        url: url + '/' + db + '/' + doc._id,
        body: doc,
        json: true,
    }, function(err, res, body) {
        if (err) return done('Unable to connect CouchDB');
        if (body.ok) {
            doc._rev = body.rev
            return done(null, doc)
        }

        done('Unable to save the document' + doc);
    });
};

console.log("Get all documents with the build-in 'All view");
exports.all = function(db, options, done) {
    var params = querystring.stringify({
      include_docs: options.include_docs === false ? false : true,
      descending: options.descending,
      skip: options.skip,
      limit: options.limit,
      key: options.key,
      startkey: options.startkey,
      endkey: options.endkey,
    })

    request({
        url: url + '/' + db + '/_all_docs?' + params,
        json: true,
      }, function(err, res, body) {
        if (err) return done('Unable to connect to CouchDB')
            done(null, body)
			
		console.log("body: " + body);
    });
};

// eof
