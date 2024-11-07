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
         image2,
         phoneNumber,
         user_username,
         user_description,
         user_languages,
         user_location,
         user_memberSince,
         user_image
      } = req.body;

      const newProject = new Project({
         user_id,
         project_name,
         industry,
         project_duration,
         project_cost,
         project_description,
         image,
         image2,
         phoneNumber,
         user_username,
         user_description,
         user_languages,
         user_location,
         user_memberSince,
         user_image
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

      const getProject = await Project.find({ user_id: user_id });

      if (!getProject) {
         res.status(404).json({ msg: "Project not found!" })
      }

      res.status(200).json(getProject)
   } catch (error) {
      res.status(500).json({ msg: error.message })
   }
}

const projectDetail = async (req, res) => {
   try {
      const project_id = req.params.id;
      const projectDetail = await Project.findById(project_id)

      if (!projectDetail) {
         res.status(404).json({ msg: "Project not found!" })
      }

      res.status(200).json(projectDetail)
   } catch (error) {
      res.status(500).json({ msg: error.message })
   }
}

const deleteProject = async (req, res) => {
   try {

      const projectId = req.params.id;

      const deleted = await Project.findByIdAndDelete(projectId)

      if (!deleted) {
         res.status(404).json({ msg: "Project not found!" })
      }

      res.status(200).json({ msg: "Project has been deleted!" })

   } catch (error) {
      res.status(500).json({ msg: error.message })
   }
}

const updateProject = async (req, res) => {
   try {

      const project_id = req.params.id;

      const update_project = await Project.findByIdAndUpdate(
         project_id,
         { $set: req.body },
         { new: true, runValidators: true }
      )

      if (!update_project) {
         res.status(404).json({ msg: "Project not found!" })
      }

      res.status(200).json({ msg: "Project has been updated!" })
   } catch (error) {
      res.status(500).json({ msg: error.message })
   }
}

module.exports = {
   getAllProject,
   addProjects,
   getSingleProject,
   projectDetail,
   deleteProject,
   updateProject
}

