const projectsEl = document.querySelector('.grid-projects')
// const loadingEl = document.querySelector('#loading')
// let loading = false

const getProjectFromBackend = async () => {
//   loading = true
  const res = await fetch('http://localhost:5000/projects')
  const data = await res.json()
//   loading = false
  return data
}


const addProjectToDom = async () => {
  const projects = await getProjectFromBackend()
  console.log(projects)

//   if (!loading) {
//     loadingEl.innerHTML = ''
//   }


  projects.forEach((project) => {
    const div = document.createElement('article')
    div.className = 'project-card'
    div.innerHTML = `
        <img src=" ${project.cover}" alt="imagen proyecto">
        <h3> ${project.title}</h3>
        <div class="divider-card"></div>
        <p>${project.type}</p>
    `
    projectsEl.appendChild(div)
  })
}

addProjectToDom();