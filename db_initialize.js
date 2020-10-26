const { MongoClient } = require('mongodb');

var mongo = require('mongodb').MongoClient;
var url = "mongodb+srv://jaskirat:123@cluster0.uddmv.mongodb.net/";
var client=new mongo(url, {useNewUrlParser:true});

client.connect(function(err,db){
    if(err) throw err;
    var dbo=db.db("portfolio");
  
	var myobj1={
		name:"Jaskirat Kaur",
		email:"jaskiratkaur1706@gmail.com",
    username:"jaskirat",
    password:"123"
	};
	
    var myobj2 = [
		{name:"Tim",number:"1352363472",email:"tim@example.com"},
    {name:"Josh",number:"5327658457",email:"josh@hotmail.com"},
    {name:"Emily",number:"7546348579",email:"emily@gmail.com"},
	];
	
		dbo.collection("user_accounts").insert(myobj1, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
      });
		
      dbo.collection("contact_list").insert(myobj2, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
      });
});