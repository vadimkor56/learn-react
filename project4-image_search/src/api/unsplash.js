import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID d1761d062358d142d63f489287e4d626213c3fa9c6049940e0ba7eb0118975b6'
  }
})
