import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-e3a68/us-central1/api'

})

export default instance