const mongoose = require("mongoose");
const {db_link} = require("../secret");

mongoose.connect(db_link).then(function(){
    console.log("Database is connected");
}).catch(function(err){
    console.log(err);
})

const userSchema = new mongoose.Schema({

     name: {
        type: String,
        required: true,
        min: 6
    },

    email: {
        type: String,
        required: true,
        validate: function () {
            return validator.validate(this.email);
        }
    },

    password: {
        type: String,
        required: true,
        min: 8
    },

    confirmPassword: {
        type: String,
        required: true,
        min: 8,
        validate: function () {
            return this.confirmPassword == this.password;
        }
    },

})


userSchema.pre("save", function (next) {
    this.confirmPassword = undefined;
    next();
})

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;