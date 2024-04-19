// create routes for todo
const express = require('express');
const router = express.Router();
const {
  createTodo,
  readTodos,
  deleteTodo,
  updateTodo
} = require('../controllers/todoController');
const { validateTodo } = require('../middlewares/validationMiddleware');

// Routes
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to todo CRUD application' });
});

router.get('/todos', readTodos);

router.post('/todos/create', validateTodo, createTodo);

router.patch('/todos/:id', updateTodo);

router.delete('/todos/:id', deleteTodo);

module.exports = router;
