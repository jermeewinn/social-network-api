const express = require('express');
const mongoose = require('mongoose');
const { db } = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
    // useFindAndModify: false,
    useNewURLParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

// // Retrieve all thoughts
// app.get('/thoughts', (req, res) => {
//     db.Thought.find({})
//         .then(dbThought => {
//             res.json(dbThought);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

// // Retrieve all users
// app.get('/user', (req, res) => {
//     db.User.find({})
// })

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));