const express = require('express');
const helmet = require('helmet');

const projectRouter = require('../projects/project-router.js');
const taskRouter = require('../tasks/task-router.js');
const resourceRouter = require('../resources/resource-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;