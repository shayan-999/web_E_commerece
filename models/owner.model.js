const mongoose=require('mongoose');

mongoose.connect('mongodb://proj1:0W6xDq916rcARQjxKmS@ac-jtklriy-shard-00-00.wgq5x3a.mongodb.net:27017,ac-jtklriy-shard-00-01.wgq5x3a.mongodb.net:27017,ac-jtklriy-shard-00-02.wgq5x3a.mongodb.net:27017/project1?ssl=true&replicaSet=atlas-67j7yg-shard-0&authSource=admin&appName=Cluster1');


const ownerSchema= mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true,
    },
    email:String,
    password:String,
    products:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin:String,
    
});

module.exports = mongoose.model("owner",ownerSchema);