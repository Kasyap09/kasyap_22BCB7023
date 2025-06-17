const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Add a task
router.post('/', async (req, res) => {
  const { text, dueDate } = req.body;
  const task = new Task({ text, dueDate: new Date(dueDate) });
  await task.save();
  res.json(task);
});

// Delete task
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

// Toggle task completion
router.put('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    task.completed = !task.completed;
    await task.save();
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

module.exports = router;