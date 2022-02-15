const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
       unique: true
    },
    password: String,
    picture: String,
    name: String,
    lastname: String,
    age: Number,
    hobby: String,
    haveBeenAbducted: {
      type: String,
      enum: ["Yes", "No"]
    },
    haveBeenProbed: {
      type: String,
      enum: ["Yes", "No"]
    },
    probeLocation: [String],
    experiments: [String],
    country: String,
    alienDescription: String,
   
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
