const { Schema, model } = require("mongoose");

const abductionSchema = new Schema(
  {
    Location: {
        latitude: String,
        longitude: String
    },
    LocationName: String,
    timeDate: String,
    pictures: [],
    descriptions: String
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Abduction = model("Abduction", abductionSchema);

module.exports = Abduction;
