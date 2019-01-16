const PubSub = require('../helpers/pub_sub.js');

const ItemView = function (container) {
  this.container = container;
};

ItemView.prototype.render = function (item) {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add("item");

  itemContainer.innerHTML += `<h3>${item.name}</h3>`;
  itemContainer.innerHTML += `<p>Priority: ${item.priority}</p>`;
  itemContainer.innerHTML += `<p>Type: ${item.type}</p>`;
  itemContainer.innerHTML += `<p>Category: ${item.category}</p>`;
  if (item.completed) {
    itemContainer.innerHTML += `<p>Completed: Yes</p>`;
  }
  if (!item.completed) {
    itemContainer.innerHTML += `<p>Completed: No</p>`;
  }

  const updateButton = this.createUpdateButton(item._id);
  itemContainer.appendChild(updateButton);

  const deleteButton = this.createDeleteButton(item._id);
  itemContainer.appendChild(deleteButton);

  this.container.appendChild(itemContainer);
};

ItemView.prototype.createUpdateButton = function (itemId) {
  const button = document.createElement('button');
  button.classList.add('update-btn');
  button.value = itemId;
  button.textContent = "Mark Complete";

  button.addEventListener('click', (evt) => {
    PubSub.publish('ItemView:item-updated', evt.target.value);
  });

  return button;
};

ItemView.prototype.createDeleteButton = function (itemId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = itemId;
  button.textContent = "Delete Entry";

  button.addEventListener('click', (evt) => {
    PubSub.publish('ItemView:item-deleted', evt.target.value);
  });

  return button;
};

module.exports = ItemView;
