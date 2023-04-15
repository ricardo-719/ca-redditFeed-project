import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostData = createAsyncThunk('fetch/getPostData', async(subReddit) => {
  const response = await fetch(`https://www.reddit.com/r/${subReddit}.json`);
  const jsonResponse = await response.json();
  return jsonResponse.data.children
})

export const getSubredditsData = createAsyncThunk('fetch/getSubredditsData', async() => {
  const response = await fetch(`https://www.reddit.com/r/popular.json`);
  const jsonResponse = await response.json();
  return jsonResponse.data.children
})