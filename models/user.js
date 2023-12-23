const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username:{
            type:String,
            require:[true, "please add the username" ],

        },
     
        email:{
            type:String,
            require:[true,"please add the email"],
            unique:[true, "Email address already taken"]
        },

        password:{
            type:String,
            require:[true,"please add the password"],
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User",userSchema);
module.exports = User;

