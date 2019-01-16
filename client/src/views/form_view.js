const PubSub = require('../helpers/pub_sub.js')

const FormView = function (form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
  if (this.form.id === "update-form") {
    PubSub.subscribe('BucketList:data-loaded', (evt) => {
      console.log(evt.detail);
      this.populate(evt.detail);
    });
  }
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

FormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newItem = this.createItem(evt.target);
  if (this.form.id === "create-form") {
    PubSub.publish('FormView:item-created', newItem);
  }
  if (this.form.id === "update-form") {
    PubSub.publish("FormView:item-updated", newItem)
  }
  evt.target.reset();
};

FormView.prototype.createItem = function (form) {
  const newItem = {
    name: form.name.value,
    priority: form.priority.value,
    type: form.type.value,
    category: form.category.value,
    completed: false
  };

  return newItem;
};

FormView.prototype.populate = function (items) {
  const itemSelect = document.querySelector("#itemId");
  items.forEach((item) => {
    itemSelect.innerHTML += `<option value="${item._id}">${item.name}</option>`;
  });
  itemSelect.addEventListener("change", (evt) => {
    console.log(event.target.value);
    const item = items.find((item) => {
      return item._id === event.target.value;
    });
    console.log(this.form);
    console.log(item);
    this.form.name.value = item.name;
    this.form.priority.value = item.priority;
    this.form.type.value = item.type;
    this.form.category.value = item.category;
  })
}

module.exports = FormView;
