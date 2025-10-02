const { connectDB, mongoose } = require("./db")
const { Task } = require("./Models/Task")
const { User } = require("./Models/User")
async function main() {
    await connectDB() // Connect to the database

    // Clear existing data
    await Task.deleteMany({});
    await User.deleteMany({});

    await User.insertMany([
        { name: 'Alice Kasmall', email: 'aliciakanini@gmail.com', role: 'admin'},
        { name: 'Bob Mwale', email: 'bobmwale@gmail.com', role: 'user'},
        { name: 'Charlie Vunjika', email: 'charliebroke@gmail.com', role: 'user'}
    ]);
    await Task.insertMany([
        { title: 'Cooking', description: 'Meal preparation and cooking', status: 'pending', dueDate: new Date('2023-10-01'), owner: 'Alice Kasmall' },
        { title: 'Cleaning', description: 'Tidying common spaces and Utensils', status: 'in-progress', dueDate: new Date('2023-10-05'), owner: 'Bob Mwale' },
        { title: 'Bible Study', description: 'Read the Bible and spear-head discussion', dueDate: new Date('2023-09-20'), owner: 'Charlie Vunjika' }
    ]);
    console.log("Database seeded successfully");
    await mongoose.disconnect();
}

main();