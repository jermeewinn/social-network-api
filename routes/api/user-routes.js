const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser
} = require('../../controllers/user-controller');

router //Set up GET all and POST at /api/users
    .route('/')
    .get(getAllUsers) //GET all users
    .post(createUser); //POST a new user

router //Set up GET one, PUT, and DELETE at /api/users/:id
    .route('/:id')
    .get(getUserById);

module.exports = router;