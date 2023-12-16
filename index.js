// import { getProjects } from "./services/notion"
const express = require('express');
const getProjects = require('./services/notion');
// const getPages = require('./services/page');
// const { getPage } = require('@notionhq/client/build/src/api-endpoints');
const PORT = process.env.PORT || 5500;

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


app.listen(PORT, console.log('Server started on port ${PORT} http://localhost:5500'));

