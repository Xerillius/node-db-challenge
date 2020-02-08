const express = require('express');
const Tasks = require('./task-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Tasks.find()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({message: "Could not retrieve tasks"});
        });
});

router.post('/', (req, res) => {
    const taskData = req.body;

    Tasks.insert(taskData)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({message: "Could not create task"});
        });
});

module.exports = router;