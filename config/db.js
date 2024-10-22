const mongoose = require('mongoose')

const connectionDb = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URL)
      console.log("Connect to Db")
   } catch (error) {
      console.log({ error: error.message })
   }
}

module.exports = connectionDb;