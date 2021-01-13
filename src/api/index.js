import axios from 'axios';
import ApiConfig from '../config/api';

async function getPosts() {
  try {
    const { data } = await axios.get(`${ApiConfig.MAIN_ENDPOINT}/posts`);
    return data;
  } catch (error) {
    console.log('error');
  }

  return [];
}

async function getUsers() {
  try {
    const { data } = await axios.get(`${ApiConfig.MAIN_ENDPOINT}/users`);
    return data;
  } catch (error) {
    console.log('error');
  }

  return [];
}

async function getComments() {
  try {
    const { data } = await axios.get(`${ApiConfig.MAIN_ENDPOINT}/comments`);
    return data;
  } catch (error) {
    console.log('error');
  }

  return [];
}

async function postNewComment(dat, comments, setComments) {
  try {
    const { data } = await axios.post(
      `${ApiConfig.MAIN_ENDPOINT}/comments`,
      dat
    );
    return setComments([...comments, data]);
  } catch (error) {
    console.log(error);
  }
}

export { getPosts, getUsers, getComments, postNewComment };
