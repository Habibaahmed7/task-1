const { error } = require("console")
const mongodb = require("mongodb")
const mongoclient = mongodb.MongoClient
const connectionUrl ='mongodb://127.0.0.1:27017'
const dbname = 'proj-10'
mongoclient.connect(connectionUrl ,(error , res) =>{
    if(error){
        return console.log("error has occured")
    }
    console.log("all be alright")
    const db =res.db(dbname)

    
db.collection('users').insertOne({
    name: 'habiba',
    age: 20
}, (error, data)=> {
    if (error){
        console.log('unable to insert data')
    }
    console.log(data.insertedId)
})


db.collection('users').insertMany( 
    [{
    name: 'ahmed',
    age:21
},
{
name:'ayman',
    age:30
},
{
name: 'shady',
    age:25
},
{
    name: 'nana',
    age: 25
},
{
    name: 'aya',
    age:30
}], (error, data)=>{
    if (error){
        console.log('unable to insert data')
    }
    console.log(data.insertedCount)
}

)


})