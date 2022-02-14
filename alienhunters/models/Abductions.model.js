const { Schema, model } = require("mongoose");

const abductionSchema = new Schema(
  {
    location: {
        latitude: String,
        longitude: String
    },
    locationName: String,
    timeDate: Date,
    pictures: [],
    descriptions: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Abduction = model("Abduction", abductionSchema);

module.exports = Abduction;
