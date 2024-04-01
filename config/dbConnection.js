const mongoose =require("mongoose")
require("dotenv").config();

const dbConnection = async (req,res)=>{
        await mongoose.connect(process.env.db_string)
     .then(()=>{
         console.log(`db connection is successful`);
     })
     .catch((error)=>{
             console.error(error);
             process.exit(1);
     });
}
module.exports=dbConnection


