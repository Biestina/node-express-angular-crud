const express = require('express');
const router = express.Router();
const DB = require('../module/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hi, this is the api page.');
});

// Example: /users = server gives all users
router.get('/:entity', async (req, res, next) => {
  const db = new DB(req.params.entity);
  let list = await db.find();
  res.json(list);
});

// Example: /users/5 = server gives a user with id 5
router.get('/:entity/:id', async (req, res, next) => {
  const db = new DB(req.params.entity);
  let list = await db.find(req.params.id);
  res.json(list);
});

// Example: /users = create a new user
router.post('/:entity', async (req, res, next) => {
  const db = new DB(req.params.entity);
  let newData = await db.create(req.body);
  res.json(newData);
});

// Example: /users/5 = update a user with id 5
router.put('/:entity/:id', async (req, res, next) => {
  const db = new DB(req.params.entity);
  let newData = await db.update(id, req.body);
  res.json(newData);
});

// Example: /users/5 = delete a user with id 5
router.delete('/:entity/:id', async (req, res, next) => {
  const db = new DB(req.params.entity);
  let deleted = await db.delete(req.params.id);
  res.json({});
});


module.exports = router;
