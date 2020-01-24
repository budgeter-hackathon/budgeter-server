const Category = require("../database").Category;

const getCategories = (req, res) => {
  Category.findAll()
    .then((categories) => {
      res.send(categories);
    })
    .catch((err) => console.log(err));
};

const getCategory = (req, res) => {
  let id = req.params.id;
  Category.findOne({ where: { id } })
    .then((category) => {
      res.send(category);
    })
    .catch((err) => console.log(err));
};

const addCategory = (req, res) => {
  let budget = req.body.budget;
  let name = req.body.name;
  Category.create({ name, budget })
    .then((category) => {
      res.send(category);
    })
    .catch((err) => console.log(err));
};

const updateCategory = (req, res) => {
  let category = req.body;
  Category.update(category, { where: { id } })
    .then((category) => {
      Category.findOne({ where: { id } })
        .then((category) => {
          res.send(category);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

const deleteCategory = (req, res) => {
  let id = req.params.id;
  return Category.findOne({ where: { id } })
    .then((category) => {
      Category.destroy({ where: { id } })
        .then(() => {
          res.send(`Category '${category.name}' deleted!`);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getCategories: getCategories,
  getCategory: getCategory,
  addCategory: addCategory,
  updateCategory: updateCategory,
  deleteCategory: deleteCategory
};
