'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
  info: String,
  git: String,
  datasets: [{path: String, ci_log: String, timestamp: {type: Date, default: Date.now}}],
  user: {email: String, name: String}
});

module.exports = mongoose.model('Project', ProjectSchema);