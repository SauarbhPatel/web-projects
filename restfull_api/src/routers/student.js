// this is the formate to use the router (apne main page ko saf rakhane ke liye ) 

// // 1. create a new router
// const router = new express.Router();

// // 2. We need to define the router

// router.get("/saurabh", (req,res)=>{
//     res.send("hello bro...");
// });

// // 3. We need to register our router in main api
// app.use(router);


const express = require("express");
const router = new express.Router();
const Student = require("../models/students");


// Create a new students (using promises)

// router.post("/students",(req,res)=>{

//     console.log(req.body);
//     const user = new Student(req.body);

//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(404).send(e);
//     })
// })

// Create a new students (using async await)-->this code better then the previous code

router.post("/students",async(req,res)=>{

    try{
        console.log(req.body);
        const user = new Student(req.body);
    
        const createUser = await user.save();
        res.status(201).send(createUser);

    }catch(e){res.status(400).send(e);}

})

// Read the data of registerd Students

router.get("/students",async(req,res)=>{

    try{
        const studentsData = await Student.find();
        res.status(200).send(studentsData);

    }catch(e){ res.status(400).send(e);}
})

// get the indivisual Student data using id

router.get("/students/:id", async (req,res)=>{

    try {
        const _id =req.params.id;
        const studentDATA = await Student.findById(_id);

        // for checking the value whom write wrong or right data
        if (!studentDATA) {
            return res.status(404).send();
        } else {
            res.status(200).send(studentDATA);           
        }

    } catch (e) {
        res.status(500).send(e);
    }
}) 


// get the indivisual Student data using name

// router.get("/students/:name", async (req,res)=>{

//     try {
//         const _name =req.params.name;
//         const studentDATA = await Student.find({name:_name});

//         // for checking the value whom write wrong or right data
//         if (!studentDATA) {
//             return res.status(404).send();

//         } else {
//             res.status(200).send(studentDATA);           

//         }
//     } catch (e) {
//         res.status(500).send(e);
//     }
// }) 


// update the students by its id

router.patch("/students/:id",async(req, res)=>{

    try{
        const _id =req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        } );
        res.send(updateStudents);
        
    }catch(e){
        res.status(404).send(e);
    }
})

// update the students by its phone

// router.patch("/students/:phone",async(req, res)=>{

//     try{
//         const _phone =req.params.phone;
//         const updateStudents = await Student.findOneAndUpdate({phone:_phone},req.body,{
//             new:true
//         } );
//         res.send(updateStudents);
        
//     }catch(e){
//         res.status(404).send(e);
//     }
// })


// Delete the students by its id

router.delete("/students/:id",async(req, res)=>{

    try{
        const deleteStudents = await Student.findByIdAndDelete(req.params.id);
        if (!deleteStudents) {
            return res.status(404).send();
            
        } else {
            res.status(200).send(deleteStudents);           
        }
        
    }catch(e){
        res.status(500).send(e);
    }
})



//  we export the file for using this file from anywere..
//      1. after export go  to the  main file app.js and require router
//      2. for inform the main app.js file to we create a new file
    module.exports =router;