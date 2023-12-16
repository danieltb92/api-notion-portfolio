const dotenv = require('dotenv').config()
const { Client } = require("@notionhq/client")
const fs = require('fs');
const { getProjects } = require('./notion')

// Initializing a client
const notion = new Client({auth: process.env.NOTION_TOKEN,})
// Notion Database ID
const database_id = process.env.NOTION_DATABASE_ID;

async () => {
    const pageId = await getProjects.idPage
    console.log(pageId);
}
// <----------------OPCION #1 --------------------->



// module.exports = async function getPages(){
// const getPages = async () => {
     
//     const payload = {
//         path: `blocks/${pageId}/children`,
//         method: 'GET',
//     }

//     const { results } = await notion.request(payload)
//     console.log(results);

//     const pageId = '5c9337285f404e08b047fbc6881778c3' ;  //'b740ffc8ac2f42e9ad6686f97fd1c76a'
//     const response = await notion.blocks.children.list({ 
//         block_id: pageId,
//         page_size: 100, });
//     // console.log(response);
//         // fs.writeFileSync('page.json', JSON.stringify(response));
//         // console.log(response);

//     const pages = response.results.map((page) => {
//         return {
//             content: page,
//         }
//     })
//     return pages
// };

// (async () => {
//     const nPages = await getPages();
//     console.log(nPages);
// })();
