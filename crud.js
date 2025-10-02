const { connectDB, mongoose } = require("./db")
const { Task } = require("./Models/Task")
const { User } = require("./Models/User")

async function main() {
    await connectDB() // Connect to the database

    // //create user 
    // const John = await User.create({name: 'John Sina', email: 'Johnsina@gmail.com' });
    // console.log("creater new user ", John);

    // //read all users
    // const users = await User.find().select('name role');
    // console.log("All users: ", users);

    //update user
    // await User.updateOne({ email: "Johnsina@gmail.com" }, { email: "johnsina@gmail.com" });
    // console.log(`John's email updated to johnsina@gmial.com`);

    // //delete user
    // await User.deleteOne({ email: "charliebroke@gmail.com"});
    // console.log("Bye Charlie with your broke ass");

    //aggregate tasks by status
    const byStatus = await Task.aggregate(
        {$group: {_id: "$status", total: {$sum: 1} }}
    );
    console.log("Tasks by status: ", byStatus);

    await mongoose.disconnect();

};

main();