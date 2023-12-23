const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      
    shortId: {
        type: String,
        require: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        require: true,
    },

    visitHistory: [{ timestamps: { type: Number } }],

},
    { timestamps: true }
);
const URL = mongoose.model("url", urlSchema);
module.exports = URL;