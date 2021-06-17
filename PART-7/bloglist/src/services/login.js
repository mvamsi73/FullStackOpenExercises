import axios from 'axios'
const baseUrl = '/api/login'

const login = async (details) => {
  const response = await axios.post(baseUrl, details)
  return response.data
}

export default { login }
