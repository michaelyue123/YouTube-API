import axios from 'axios';

const KEY = 'AIzaSyDEMZGJp1dCtCHMmK_MOsG7ePKcjEXYfOs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});

