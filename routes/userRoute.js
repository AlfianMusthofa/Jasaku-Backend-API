const { getAllUser, addUsers, login, deleteUser, updateUser } = require('../controllers/userController')
const express = require('express')

const router = express.Router()

router.get('/', getAllUser)
router.post('/', addUsers)
router.post('/login', login)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

module.exports = router
