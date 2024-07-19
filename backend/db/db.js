const mongoos = require('mongoose');
const connectDB = async()=>{
    try {
        await mongoos.connect('mongodb+srv://abhijeetkumarupadhyay8:QtVaZL4Dv6LWAtME@cluster0.1dplhug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
            console.log("Connected!!!")
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = connectDB