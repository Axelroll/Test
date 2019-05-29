import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 4748446dea7be8b09d6139e1fc0ecd474d42e378ce6f6b3d67e928acd5b3badb'
  }
});