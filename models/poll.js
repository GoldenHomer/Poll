var mongoose = require('mongoose');

// Schema for votes
var voteSchema = new mongoose.Schema({ ip: 'String' }); // There may be an error here.

// Schema for poll choices
var choiceSchema = new mongoose.Schema({ 
	text: String,
	votes: [voteSchema]
});

// Schema for polls
exports.PollSchema = new mongoose.Schema({
	question: { type: String, required: true },
	choices: [choiceSchema]
});