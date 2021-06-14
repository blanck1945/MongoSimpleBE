const mongoose = require("mongoose");
require("dotenv").config();

class MongoConnection {
  url = process.env.MONGO;

  async connectToAtlas() {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(this.url, connectionParams, async () => {
      try {
        console.log("Connected to database ");
      } catch (err) {
        console.error(`Error connecting to the database. \n${err}`);
      }
    });
  }
}

module.exports = new MongoConnection();
