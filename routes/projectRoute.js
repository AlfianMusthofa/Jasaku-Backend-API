const { getAllProject, addProjects, getSingleProject, projectDetail, deleteProject, updateProject } = require('../controllers/projectContoller')
const express = require('express')
const router = express.Router()

router.get('/', getAllProject);
router.post('/', addProjects);
router.get('/:id', getSingleProject);
router.get('/projectDetail/:id', projectDetail)
router.delete('/:id', deleteProject);
router.patch('/:id', updateProject)

module.exports = router