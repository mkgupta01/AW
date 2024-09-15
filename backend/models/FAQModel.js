const mongoose = require('mongoose')


const faqSchema = mongoose.Schema({
    name:{
        type: String,
        require: [true, "Please enter a name"]
    },
    title:{
        type: String,
        require: [true, "Please enter a name"]
    },
    content:{
        type: String,
        require: [true, "Please enter content"],
    }
})


module.exports = mongoose.model("FAQs", faqSchema);
