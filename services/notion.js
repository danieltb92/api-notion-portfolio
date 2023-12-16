const dotenv = require('dotenv').config()
const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({auth: process.env.NOTION_TOKEN,})
// Notion Database ID
const database_id = process.env.NOTION_DATABASE_ID;


// <---------------- PROJECTS --------------------->


module.exports = async function getProjects(){
// const getProjects = async () => {

    const payload = {
      path: `databases/${database_id}/query`,
      method: 'POST',
    }
  
    const { results } = await notion.request(payload)
    // console.log(results);
  
    const projects = results.map((page) => {
      return {
        id: page?.properties?.Slug?.rich_text?.[0]?.plain_text || null,
        url: page?.public_url || null,
        idPage: page?.id || null,
        name: page?.properties?.Name?.title?.[0]?.plain_text || null,
        // cover: page.properties.Cover.files[0].file.url,
        title: page?.properties?.TitleProject?.rich_text?.[0]?.plain_text || null,
        type: page?.properties?.Type?.rich_text?.[0]?.plain_text || null,
        // date: page.properties.Date.date.start,
        // tags: page.properties.Tags.rich_text[0].text.content,
        // description: page.properties.Description.rich_text[0].text.content,
        status: page?.properties?.Status?.select?.name || null,
      }
    })
    
    return projects
}

// (async () => {
//     const nProject = await getProjects()
//     console.log(nProject);
// })();


// <---------------- PAGES --------------------->


//// Obtiene los id de las páginas de Notion ////
// const getProjectIds = async () => {

//   const projects = await getProjects();

//   const ids = projects.map((project) => {
//     // Accede a la propiedad idPage
//     return project.idPage;
//   });

//   return ids;
// };

// (async () => {
//   const ids = await getProjectIds();
//   console.log(ids);
// })();


// module.exports = async function getPages(){
// const getPages = async () => {
  
//   const pageIds = await getProjectIds();
//   // const pageId = '5c9337285f404e08b047fbc6881778c3' ;  //'b740ffc8ac2f42e9ad6686f97fd1c76a'

// ////////////////////////////

//   const pages = await Promise.all(pageIds.map(async (pageId) => {
    
//     const payload = {
//       path: `blocks/${pageId}/children`,
//       method: 'GET',
//     };

//     const { results } = await notion.request(payload);
    

//     return results.map((page) => ({
//         id: pageId,
//         typeBlock: page.type,
//         //content: page,
        
//         // content: (page.type || '')?.rich_text?.[0] || null,
//         contentP: page.paragraph?.rich_text?.[0] || null,
//         contentI: page.image?.file?.url || null,
//         // page_size: 50,
//     }));
//   }));

//   return pages.flat();
// };


// /////////////////////////////

// //   const payload = {
// //       path: `blocks/${pageId}/children`,
// //       method: 'GET',
// //   }

// //   const { results } = await notion.request(payload)
// //   // console.log(results);

// //     // const pageId = '5c9337285f404e08b047fbc6881778c3' ;  //'b740ffc8ac2f42e9ad6686f97fd1c76a'
// //   const response = await notion.blocks.children.list({ 
// //     block_id: pageId,
// //     page_size: 100, });
// //     // console.log(response);
// //         // fs.writeFileSync('page.json', JSON.stringify(response));
// //         // console.log(response);

// //   const pages = response.results.map((page) => {
// //       return {
// //           content: page,
// //       }
// //     })
// //     return pages;
// // };

// (async () => {
//     const nPages = await getPages();
//     console.log(nPages);
// })();



// <---------------- CREATE JSON FILE --------------------->

// const fs = require('fs');
// async function getNotionData() {
    
//   const results = await notion.databases.query({
//       database_id
//   });

//   fs.writeFileSync('data.json', JSON.stringify(results));
//   console.log(results);
// }
// getNotionData();