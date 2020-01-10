
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  // return axios.post(baseUrl, newObject)
  return axios.post(baseUrl, newObject).then(res => res.data)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const personToDelete = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(r => r.data)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  personToDelete: personToDelete 
}