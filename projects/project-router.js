const express = require('express');
const Projects = require('./project-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({message: "Could not retrieve projects"});
        });
});

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.insert(projectData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({message: "Could not create project"});
        });
});

module.exports = router;