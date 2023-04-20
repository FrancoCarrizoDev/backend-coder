const { MONGODBURL }= require('./config');
const {mongoose} = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect(MONGODBURL, (err) => {
  if (err) {
    console.log("❌ Error:" + err);
  } else {
    console.log("🔥 Connected to MongoDB");
  }
});

module.exports = mongoose