const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxlength:50,
        },
        description : {
             type:String,
            required:true,
            maxlength:50,
        },
        createdAt:{
             type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo",todoSchema);

// Schema -> description of the data

// create todo route jo me controll mapping create krunga uska simple ye mtlb hai  ki todo type ka ek object banao aur usko database me insert kro