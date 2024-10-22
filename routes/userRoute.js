const { getAllUser, addUsers, login, deleteUser } = require('../controllers/userController')
const express = require('express')

const router = express.Router()

router.get('/', getAllUser)
router.post('/', addUsers)
router.post('/login', login)
router.delete('/:id', deleteUser)

module.exports = router
