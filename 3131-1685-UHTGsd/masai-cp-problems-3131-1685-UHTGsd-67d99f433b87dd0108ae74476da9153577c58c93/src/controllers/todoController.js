const Todo = require('../models/Todo');

const createTodo = async (req, res) => {
  const { title, description } = req.body;

  try {
    const todo = new Todo({
      title,
      description
    });

    await todo.save();

    res.status(201).json({
      message: 'Todo created successfully',
      todo
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const readTodos = async (req, res) => {
  try {
    let query = Todo.find();

    if (req.query.sortBy && req.query.order) {
      const sortBy = req.query.sortBy;
      const order = req.query.order === 'asc' ? 1 : -1;
      query = query.sort({ [sortBy]: order });
    }


    if (req.query.status) {
      const status = req.query.status;
      query = query.where('status').equals(status);
    }

    const todos = await query.exec();

    res.status(200).json({ todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;

  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await Todo.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(201).json({
      message: 'Todo updated successfully',
      todo
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createTodo, readTodos, deleteTodo, updateTodo };
