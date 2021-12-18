const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// const userRouter = require("./router/userRouter");
const quizRouter = require("./router/quizRouter");


app.use(express.json());

// app.use("/api/user", userRouter);
app.use("/api/quiz", quizRouter);


app.listen(PORT, () => {
    console.log(`server is successfully started at port ${PORT}`)
})
