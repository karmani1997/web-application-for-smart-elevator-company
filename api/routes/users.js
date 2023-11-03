const router = require('express').Router()
usersController = require('../controllers/users.js')


router.put('/users/:id', usersController.updateUser);

router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);
router.delete('/users/:id', usersController.deleteUser);
router.get('/error', usersController.errorHandler); 

module.exports = router;
