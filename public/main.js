const projectsEl = document.querySelector('.grid-projects')
const pagesEl = document.querySelector('.content-page')
// const loadingEl = document.querySelector('#loading')
// let loading = false

const getProjectFromBackend = async () => {
//   loading = true
  const res = await fetch('http://localhost:5500/projects')
  const data = await res.json()
//   loading = false
  return data
}


const addProjectToDom = async () => {
  const projects = await getProjectFromBackend()
  console.log(projects)
  const statusProject = projects.filter(project => project.status === 'Published')

//   if (!loading) {
//     loadingEl.innerHTML = ''
//   }

  projects.forEach((project) => {
    if (project.status === 'Published'){
      
      const div = document.createElement('article')
      div.className = 'project-card'
      div.innerHTML = `
          <img src=" ${project.cover}" alt="imagen proyecto">
          <h3> ${project.title}</h3>
          <div class="divider-card"></div>
          <p>${project.type}</p>
      `
      projectsEl.appendChild(div)
    }
  })
}

addProjectToDom();

 

// const getPagesFromBackend = async () => {
//   //   loading = true
//     const res = await fetch('http://localhost:5500/pages')
//     const data = await res.json()
//   //   loading = false
//     return data
// }

// const addPageToDom = async () => {
//   const pages = await getPagesFromBackend()
//   console.log(pages)

// //   if (!loading) {
// //     loadingEl.innerHTML = ''
// //   }


//   pages.forEach((page) => {
//     const div = document.createElement('div')
//     div.innerHTML = `
//         <div>
//         ${page.content}
//         </div>
//     `
//     // pagesEl.appendChild(div)
//   })
// }

// addPageToDom();