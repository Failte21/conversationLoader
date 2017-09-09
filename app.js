const MongoClient = require("mongodb").MongoClient;
const sample = require("./conversations.json");

MongoClient.connect(process.argv[2], (err, db) => {
    if (err) { console.log(err) }
    else if (db) {
        db.collection("conversations", (err, collection) => {
            if (err) { console.log(err) }
            else {
                collection.remove({}, (err, res) => {
                    collection.insert(sample, (err, res) => {
                        if (err) { throw err}
                        else {
                            console.log(res);
                            db.close()
                        }
                    })
                })
            }
        })
    }
});
