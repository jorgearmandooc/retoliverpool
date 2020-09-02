const express = require('express')
const mongo = require('mongodb').MongoClient;
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

let db = {};

mongo.connect("mongodb://localhost:27017", {
	useNewUrlParser: true,
	useUnifiedTopology: true
},function(err,client){
	
	if(err) throw err;
	
	db = client.db('liverpool');
	
});

app.get('/', (req, res) => {
	
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({status:'ok',message:'API working...'}));
  
})
app.get('/products', (req, res) => {
	
	db.collection('products', function (err, collection) {
		
		if(err) throw err;
		
		collection.find({}).toArray(function(err, docs) {
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(docs));
		});
		
	});
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});