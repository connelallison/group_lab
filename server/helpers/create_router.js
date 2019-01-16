const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection){
  const router = express.Router();

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
  });

  router.post('/', (req, res) => {
    const newBucket = req.body;
    collection.insertOne(newBucket)
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs))
  });

  router.put('/:id', (req, res) => {
    const id = ObjectID(req.params.id);
    collection.updateOne(
      {_id: id},
      {$set: {completed: true}}
    )
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs))
  });

  router.delete('/:id', (req, res) => {
    const id = ObjectID(req.params.id)
    collection.deleteOne({_id: id})
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs))
  });

  return router;

};


module.exports = createRouter;
