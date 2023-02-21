const mongoose = require('mongoose');
// const mongoURI = "'mongodb://localhost:0000/inotebook/', { useNewUrlParser: true }";


mongoose.set('strictQuery', true);

// mongoose.connect(
//     "mongodb+srv://Raxmice_98:Raxmice1998@noderax.tkfup.mongodb.net/personalfiletask",
//     { useNewUrlParser: true }
//   );

const connectToMongo = ()=> {
    mongoose.connect('mongodb+srv://Raxmice_98:Raxmice1998@noderax.tkfup.mongodb.net/loomkar', { useNewUrlParser: true }, ()=>{
        console.log("mongoDB connected");
    })
    
}

module.exports = connectToMongo;