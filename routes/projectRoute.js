const { getAllProject, addProjects, getSingleProject } = require('../controllers/projectContoller')
const express = require('express')
const router = express.Router()

router.get('/', getAllProject),
   router.post('/', addProjects),
   router.get('/:id', getSingleProject)

module.exports = router