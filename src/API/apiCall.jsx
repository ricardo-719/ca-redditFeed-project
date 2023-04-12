import { createAsyncThunk } from "@reduxjs/toolkit";

/* export const fetchPostData = async(subReddit) => {
    try {
      const response = await fetch(`https://www.reddit.com/r/${subReddit}.json`);
      if (response.ok) {
        const jsonResponse = await response.json();
        
        return jsonResponse.data.children.map((post) => post.data);
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
} */

/* const fetchPostData = async(endpoint) => {
  try {
    const response = await fetch(`https://www.reddit.com/r/${endpoint}.json`);
    if (response.ok) {
      const jsonResponse = await response.json();
       setPosts(jsonResponse.data.children);
      return jsonResponse.data.children
    }
  } catch (error) {
    console.log(error);
  }
} */

export const getPostData = createAsyncThunk('fetch/getPostData', async(subReddit) => {
    const response = await fetch(`https://www.reddit.com/r/${subReddit}.json`);
    const jsonResponse = await response.json();
    return jsonResponse.data.children
  })