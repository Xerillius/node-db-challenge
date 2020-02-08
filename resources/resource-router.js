const express = require('express');
const Resources = require('./resource-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Resources.find()
        .then(resources => {
            res.json(resources)
        })
        .catch(err => {
            res.status(500).json({message: "Could not retrieve resources"});
        });
});

router.post('/', (req, res) => {
    const resourceData = req.body;

    Resources.insert(resourceData)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({message: "Could not create resource"});
        });
});

module.exports = router;