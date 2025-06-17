
const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  text: String,
  dueDate: Date,
  completed: {
    type: Boolean,
    default: false
  }
});
module.exports = mongoose.model('Task', taskSchema);
