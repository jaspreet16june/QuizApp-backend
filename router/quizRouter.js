const express = require("express");
let quizRouter = express.Router();
const quizModel = require("../model/quizModel");


quizRouter.route("/")
          .post(createQuiz)
          .get(getAllQuestions)
          .delete(deleteQuestion);

async function createQuiz(req,res){
    try{
        let data = req.body;
        let question  = await quizModel.create(data);

        res.status(200).json({
            message:question,
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message,
        })
    }
}

async function getAllQuestions(req, res) {
    try {
        let ques = await quizModel.find()
        res.status(200).json({
            data: ques,
        })

    } catch (err) {
        consol.log(err);
        res.status(500).json({
            message: err.message,
        })
    }
}

async function deleteQuestion(req,res){
    try{
        let { id } = req.body;
        let deleted = await quizModel.findByIdAndDelete(id);
        
        res.status(200).json({
        message:deleted,
        })
    }
    catch(err){
        res.status(404).json({
            message:err.message,
        })
    }
}
module.exports = quizRouter;