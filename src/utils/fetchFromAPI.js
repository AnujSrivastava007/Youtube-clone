import axios from "axios";

export const BASE_URL="https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "37a5c5c237msh4ef209ebf58ddf8p12d9f9jsn07efbb2b2337",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// '37a5c5c237msh4ef209ebf58ddf8p12d9f9jsn07efbb2b2337'

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}


