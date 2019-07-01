import axios from 'axios'

const KEY = 'AIzaSyBFG1slDQHFnPHJOAwor6wscaeuCx56U48'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
