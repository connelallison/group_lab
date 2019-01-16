const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function () {
  this.url = 'http://localhost:3000/api/bucketlist';
  this.request = new Request(this.url);
};

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:item-created", (evt) => {
    this.postItem(evt.detail);
  });

  PubSub.subscribe("ItemView:item-updated", (evt) => {
    this.markComplete(evt.detail);
  });

  PubSub.subscribe("ItemView:item-deleted", (evt) => {
    this.deleteItem(evt.detail);
  });
};


BucketList.prototype.getData = function () {
  this.request.get()
    .then((items) => {
      PubSub.publish('BucketList:data-loaded', items);
    })
    .catch(console.error);
};

BucketList.prototype.postItem = function (item) {
  this.request.post(item)
    .then((items) => {
      PubSub.publish('BucketList:data-loaded', items);
    })
    .catch(console.error);
};

BucketList.prototype.markComplete = function (itemId) {

  this.request.put(itemId)
    .then((items) => {
      PubSub.publish('BucketList:data-loaded', items);
    })
    .catch(console.error);
};

BucketList.prototype.deleteItem = function (itemId) {
  this.request.delete(itemId)
    .then((items) => {
      PubSub.publish('BucketList:data-loaded', items);
    })
    .catch(console.error);
};

module.exports = BucketList;
