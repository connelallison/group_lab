const PubSub = require('../helpers/pub_sub.js')

const FormView = function (form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

FormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newItem = this.createGame(evt.target);
  PubSub.publish('FormView:item-created', newItem);
  evt.target.reset();
};

FormView.prototype.createGame = function (form) {
  const newItem = {
    name: form.name.value,
    priority: form.priority.value,
    type: form.type.value,
    category: form.category.value,
    completed: false
  };

  return newItem;
};

module.exports = FormView;
