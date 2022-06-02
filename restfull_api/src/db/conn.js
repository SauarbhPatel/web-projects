// Connecting mongoose to the database mongodb
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/saurabh-api', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection is successful");
}).catch((e) => {
    console.log("No connection");
})
