'use strict';

const mongoose = require('mongoose');

const User = mongoose.model('Users');

exports.list_all_users = function (req, res) {
  User.find({}, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.create_a_user = function (req, res) {
  const newUser = new User(req.body);
  newUser.save(function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.read_a_user = function (req, res) {
  User.findById(req.params.userId, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.login = function (req, res) {
  User.findOne({ email: req.body.email, password: req.body.password }, function (err, user) {
    if (err) {
      res.send(err);
    }
    console.log(user)
    res.json(user);
  });
};

exports.update_a_user = function (req, res) {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, function (err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.delete_a_user = function (req, res) {
  User.remove(
    {
      _id: req.params.userId
    },
    function (err, user) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'User successfully deleted' });
    }
  );
};
