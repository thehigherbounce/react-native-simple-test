import axios from "axios";

const Axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export const fetchPosts = async () => {
  try {
    const result = await Axios.get(`/posts`);
    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const fetchCommentsByPostId = async (data: { id: number }) => {
  try {
    const result = await Axios.get(`/posts/${data.id}/comments`);
    return result.data;
  } catch (error) {
    throw error;
  }
}
