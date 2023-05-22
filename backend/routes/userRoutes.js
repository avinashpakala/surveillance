const express = require('express');
const router = express.Router();
const userConroller = require('../controllers/userController');

router.get('/', userConroller.getUsers);
// router.get('/:id', userConroller.getUserById);
router.put('/:id', userConroller.updateUser);
router.delete('/:id', userConroller.deleteUser);

module.exports = router;