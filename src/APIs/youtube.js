import axios from 'axios';
// Axios is a promise-based HTTP client that works both 
// in the browser and in a node.js environment. It provides 
// a single API for dealing with XMLHttpRequest s and node's http interface. 
// It also wraps the requests using a polyfill for ES6 new's promise syntax.

const KEY = 'AIzaSyDEMZGJp1dCtCHMmK_MOsG7ePKcjEXYfOs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});

