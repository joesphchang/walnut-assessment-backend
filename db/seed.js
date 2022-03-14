const User = require('../models/Users');
const userSeeds = require('./list.json');

// Logic
User.deleteMany({})
	.then(() => {
		console.log('Deleted all of my users!');
		return userSeeds.map((user) => {
			return { ...user };
		});
	})
	.then((user) => {
		return User.insertMany(user);
	})
	.then((newUser) => {
		console.log('Created a new portfolio!', newUser);
	})
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
