// Mongoose Schema
const mongoose = require('mongoose');
const validator = require('validator');


const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3  
    } ,
    email:{
        type:String,
        required:true,
        unique:[true,"This email id already present..please enter another email id"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:[true,"This number is already present"]
        
    },
    address:{
        type:String,
        required:true  
    }
  });


// We will create a new collection using model 
// first letter should be captal 
const Student = new mongoose.model('Student',studentSchema);

//  we export the file for using this file from anywere..
//      1. after export go  to the  main file app.js and require Student
//      2. for inform the main app.js file to we create a new file
module.exports = Student;