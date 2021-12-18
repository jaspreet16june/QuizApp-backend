const mongoose = require("mongoose");
const {db_link} = require("../secret");

mongoose.connect(db_link).then(function(){
    console.log("DataBase2 is connected");
}).catch(function(err){
    console.log(err);
})

const quizSchema = new mongoose.Schema({

description: String,
options: [
        {   
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
})

const quizModel = mongoose.model("quizModel",quizSchema);
module.exports = quizModel;