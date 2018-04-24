// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// const url = 'mongodb://localhost:27017/conFusion';

// MongoClient.connect(url, (err, db) => {

// 	assert.equal(err, null);

// 	console.log('connected successfully to server');

// 	const collection = db.conllection("dishes");
// 	collection.insertOne({"name":"Uthappizza", "description": "pizzaDesc"}, (err, result) => {
// 		assert.equal(err, null);

// 		console.log("After Insert: \n");
// 		console.log(result.ops);

// 		collection.find({}).toArray((err, docs) => {
// 			assert.equal(err, null);

// 			console.log("found: \n");
// 			console.log(docs);

// 			db.dropCollection("dishes", (err, result) => {
// 				assert.equal(err, null);

// 				db.close();
// 			});
// 		});
// 	});

// });

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url, (err, client) => {

    assert.equal(err,null);

    console.log('Connected correctly to server');

    var db = client.db();
    const collection = db.collection("dishes");
    collection.insertOne({"name": "Uthappizza", "description": "test"},
    (err, result) => {
        assert.equal(err,null);

        console.log("After Insert:\n");
        console.log(result.ops);

        collection.find({}).toArray((err, docs) => {
            assert.equal(err,null);
            
            console.log("Found:\n");
            console.log(docs);

            db.dropCollection("dishes", (err, result) => {
                assert.equal(err,null);

                client.close();
            });
        });
    });

});