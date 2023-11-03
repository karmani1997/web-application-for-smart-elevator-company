const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, "Please enter a user name"]
    },
    email: {
        type: String,
        required: true
    }
    },
    
    {
    timestamps: true
    }
)


const User = mongoose.model('User', userSchema);
module.exports = User;
