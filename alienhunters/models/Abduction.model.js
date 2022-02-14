const { Schema, model } = require("mongoose");
const User = require("./User.model");

const abductionSchema = new Schema(
  {
    //https://mongoosejs.com/docs/geojson.html
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: true
      },
      // Note that longitude comes first in a GeoJSON coordinate array, not latitude.
      coordinates: {
        type: [Number],
        required: true
      }
    },
    locationName: String,
    timeDate: Date,
    pictures: [],
    description: String,
    reporter: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Abduction = model("Abduction", abductionSchema);

module.exports = Abduction;
