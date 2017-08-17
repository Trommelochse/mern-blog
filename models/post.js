var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
    type:String,
    required: true
  },
  subtitle: {
    type:String,
    required: true
  },
  body: {
    type:String,
    required: true
  },
  createdAt: {
    type: Number
  },
  published: {
    type: Boolean,
    default: false
  },
  tags: {
    type: Array
  }
});

module.exports = mongoose.model('Post', PostSchema);
