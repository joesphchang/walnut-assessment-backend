const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
	posts: [
		{   
            id: Number,
			author: String,
			authoId: Number,
			likes: Number,
			popularity: Number,
			reads: Number,
			tags: [String],
		},
	],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
