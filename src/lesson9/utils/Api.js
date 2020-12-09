
import database from "../database.json"

export function getProjects() {
    return Promise.resolve(database.projects)
}

export function getProject(id) {
    console.log(id)
    const project = database.projects.find(p => p.id === id)
    console.log("get project", project)
    return Promise.resolve(project || null)
}