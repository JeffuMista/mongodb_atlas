const { mongoose } = require('../db');
const { Schema } = mongoose; 

const taskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    status: {type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending'},
    dueDate: {type: Date},
    owner: String
}, {timestamps: true});

const Task = mongoose.model('Task', taskSchema);

module.exports = {Task};