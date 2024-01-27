import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
    params: {
      part: 'snippet',
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '50df4a21e8msh64bcc7eee9e2a9dp1a690ajsn2a7ee4d72b33',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)

    return data;
} 