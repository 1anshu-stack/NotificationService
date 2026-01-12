import mongoose from "mongoose";


const connectDB = async () => {
  try {
    if(process.env.NODE_ENV = 'development'){
      await mongoose.connect(process.env.MONGO_URI, {
        dbName: "notificationService"
      })
    }else {
      await mongoose.connect(process.env.MONGO_URI, {
        dbName: "notificationServiceProduction"
      })
    }
    console.log('Notification Database connect successfully')
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

export default connectDB;