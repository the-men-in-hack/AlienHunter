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
    firstname: String,
    lastname: String,
    age: Number,
    country: String,
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
    alienDescription: String,
   
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
