const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const dboper = require('./operations');
const url = 'mongodb://localhost:27017/conFusion';


MongoClient.connect(url).then((db) => {

	var db = mongoose.connection;

    console.log('Connected correctly to server');

    dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
        "dishes")
        .then((result) => {
            console.log("Insert Document:\n", result.ops);

            return dboper.findDocuments(db, "dishes");
        })
        .then((docs) => {
            console.log("Found Documents:\n", docs);

            return dboper.updateDocument(db, { name: "Vadonut" },
                    { description: "Updated Test" }, "dishes");

        })
        .then((result) => {
            console.log("Updated Document:\n", result.result);

            return dboper.findDocuments(db, "dishes");
        })
        .then((docs) => {
            console.log("Found Updated Documents:\n", docs);
                            
            return db.dropCollection("dishes");
        })
        .then((result) => {
            console.log("Dropped Collection: ", result);

            return db.close();
        })
        .catch((err) => console.log(err));

})
.catch((err) => console.log(err));

// MongoClient.connect(url).then((db) => {

//     assert.equal(err,null);

//     console.log('Connected correctly to server');

//     // var db = client.db();

//     dboper.insertDocument(db, { name: "Vadonut", description: "VadonutDesc"},
//         "dishes")
//     	.then((result) => {
//             console.log("Insert Document:\n", result.ops);

//             dboper.findDocuments(db, "dishes");
//         })
//         .then((docs) => {
//             console.log("Found Documents:\n", docs);

//             return dboper.updateDocument(db, { name: "Vadonut" },
//                 { description: "Updated Test" }, "dishes");
//         })
//         .then((result) => {
//             console.log("Updated Document:\n", result.result);

//             return dboper.findDocuments(db, "dishes");
//         })
//         .then((docs) => {
//             console.log("Found Updated Documents:\n", docs);
                        
//             return db.dropCollection("dishes");
//         })
//         .then((result) => {
//             console.log("Dropped Collection: ", result);

//             return db.close();
//         });
//         .catch((err) => console.log(err));
// })                            
// .catch((err) => console.log(err));

