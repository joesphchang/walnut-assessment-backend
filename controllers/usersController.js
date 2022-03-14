const express = require('express');

const router = express.Router();

const User = require('../models/Users');

// Getting all users
router.get('/', async (req, res, next) => {
	try {
		const users = await User.find({});
		res.json(users);
	} catch (error) {
		next(error);
	}
});

// Getting all useres by ID 
router.get('/:id', async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		res.json(user);
	} catch (error) {
		next(error);
	}
});

// Making a new user
router.post('/', async (req, res, next) => {
	try {
		const newUser = await User.create(req.body);
		res.json(newUser);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
