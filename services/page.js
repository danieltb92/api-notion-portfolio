const dotenv = require('dotenv').config()
const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({auth: process.env.NOTION_TOKEN,})
// Notion Database ID
const database_id = process.env.NOTION_DATABASE_ID;


// <----------------OPCION #1 --------------------->

const getPages = async () => {
// module.exports = async function getPages(){

    const payload = {
      path: `databases/${database_id}/query`,
      method: 'POST',
    }
  
    const { results } = await notion.request(payload)
    console.log(results);
  
    const pages = results.map((page) => {
      return {
       idPage: page.id,
       id: page.properties.Slug.rich_text[0].plain_text,
      }
    })
  
    return pages
}

(async () => {
    const nPages = await getPages()
    console.log(nPages);
})();



// (async () => {
//   const pageId = ;  //'b740ffc8ac2f42e9ad6686f97fd1c76a'
//   const response = await notion.pages.retrieve({ page_id: pageId });
//   console.log(response);
// })();