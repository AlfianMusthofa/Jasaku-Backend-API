const Project = require('../models/projectModel')

const getAllProject = async (req, res) => {
   try {
      const projects = await Project.find()
      res.status(200).json(projects)
   } catch (error) {
      res.status(500).json({ msg: error.message })
   }
}

const addProjects = async (req, res) => {

   try {

      const {
         user_id,
         project_name,
         industry,
         project_duration,
         project_cost,
         project_description,
         image,
         phoneNumber,
         user_username,
         user_description,
         user_languages,
         user_location,
         user_memberSince
      } = req.body;

      const newProject = new Project({
         user_id,
         project_name,
         industry,
         project_duration,
         project_cost,
         project_description,
         image,
         phoneNumber,
         user_username,
         user_description,
         user_languages,
         user_location,
         user_memberSince
      })

      await newProject.save();

      res.status(200).json({ msg: 'Project has been created!' })

   } catch (error) {
      res.status(500).json({ msg: error.message })
   }

}

const getSingleProject = async (req, res) => {
   try {
      const user_id = req.params.id;

      const getProject = await Project.findOne({ user_id: user_id });

      if (!getProject) {
         res.status(404).json({ msg: "Project not found!" })
      }

      res.status(200).json(getProject)
   } catch (error) {
      res.status(500).json({ msg: error.message })
   }
}

module.exports = {
   getAllProject,
   addProjects,
   getSingleProject
}