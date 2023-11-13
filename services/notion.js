const dotenv = require('dotenv').config()
const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({auth: process.env.NOTION_TOKEN,})
// Notion Database ID
const database_id = process.env.NOTION_DATABASE_ID;


// <----------------OPCION #1 --------------------->


module.exports = async function getProjects(){

    const payload = {
      path: `databases/${database_id}/query`,
      method: 'POST',
    }
  
    const { results } = await notion.request(payload)
    console.log(results);
  
    const projects = results.map((page) => {
      return {
        id: page.properties.Slug.rich_text[0].plain_text,
        name: page.properties.Name.title[0].plain_text,
        cover: page.properties.Cover.files[0].file.url,
        title: page.properties.TitleProject.rich_text[0].plain_text,
        type: page.properties.Type.rich_text[0].plain_text,
        // date: page.properties.Date.date.start,
        // tags: page.properties.Tags.rich_text[0].text.content,
        // description: page.properties.Description.rich_text[0].text.content,
      }
    })
  
    return projects
}

// (async () => {
//     const nProject = await getProjects()
//     console.log(nProject);
// })();




// <----------------OPCION #2 MIDUDEV--------------------->

// module.exports const getProjects = async () =>  {
    
//     const query = {database_id} 

//     if(filterBy){
//         query.filter = {
//             property: 'Slug',
//             rich_text: {
//                 equals: filterBy
//             }
//         }
//     }
  
//     const { results } = await notion.databases.query(query);
//     console.log(results);
//     return results.map(page => {
//         const {properties} = page;  
//         const {Slug, Title} = properties;
        
//         return {
//             id: Slug.rich_text[0].plain_text,
//             title: Title.title[0].plain_text
//         }
//     })
    
// };




// <----------------OPCION #3 --------------------->

// (async () => {
//   const databaseId = database_id;
//   const response = await notion.databases.query({
//     database_id: databaseId,
//   });
//   console.log(response);
// })();



// <---------------- OPCION #4  NOTION --------------------->

// (async () => {
//   const response = await notion.databases.retrieve({database_id});
//   console.log(response);
// })();


// <---------------- OPCION #5  CREATE JSON FILE --------------------->

// const fs = require('fs');
// async function getNotionData() {
    
//   const results = await notion.databases.query({
//       database_id
//   });

//   fs.writeFileSync('data.json', JSON.stringify(results));
//   console.log(results);
// }
// getNotionData();