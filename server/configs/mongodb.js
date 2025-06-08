import mongoose, { mongo } from 'mongoose'

//Connect to the MongoDB database

const connectDB = async ()=>{
    mongoose.connection.on('connected', ()=> console.log('Databse Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}
export default connectDB