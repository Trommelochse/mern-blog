var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongoDB = require('./data/db');

var app = express();

var Post = require('./models/post');

var port = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(mongoDB, {
  useMongoClient: true
});
var db = mongoose.connection;

app.get('/api/posts', function(req, res) {
  Post.find({published: true}, function(err, posts) {
    res.send(posts);
  });
});

app.get('/api/posts/:id', function(req, res) {
  Post.findOne({_id : req.params.id}, function(err, post) {
    res.send(post);
  });
});

app.post('/api/posts/new', function(req, res) {
  const {title, subtitle, body, tags, createdAt} = req.body;
  const newPost = new Post({title, subtitle, body, tags, createdAt});
  newPost.save((err, post) => {
    if (err) { res.json({error: err}) }
    else res.json(post);
  });
});

app.put('/api/posts/:id', function(req, res) {
  const id = req.params.id;
  const post = req.body;
});

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);

console.log(`App listening on ${port}`);
