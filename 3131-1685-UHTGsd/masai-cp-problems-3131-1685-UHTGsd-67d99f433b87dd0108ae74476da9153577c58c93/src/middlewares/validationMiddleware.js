const validateTodo = (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and Description are mandatory' });
  }

  next();
};

module.exports = { validateTodo };
