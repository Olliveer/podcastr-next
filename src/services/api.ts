import axios from "axios";


const api = axios.create({
  baseURL: process.env.NEX_API_URL
})

export {api}