// const dotenv = require('dotenv').config()
// import { getProjects } from "./services/notion"
const express = require('express');
const getProjects = require('./services/notion');
// const getPages = require('./services/page');
// const { getPage } = require('@notionhq/client/build/src/api-endpoints');
const config = require('./config.js');
// const PORT = process.env.PORT || 5500;

const app = express()

app.use(express.static('public'))

app.get('/projects',async (req, res) => {
  const projects = await getProjects()  
  res.json(projects)
})

// app.get('/pages', async (req, res) => {
//   const pages = await getPages ()
//   res.json(pages)
// })

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.listen(config.PORT, config.HOST, 
  console.log(`Server started on port http://${config.HOST}:${config.PORT}`));

