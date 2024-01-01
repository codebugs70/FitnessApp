import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com/exercises";
const API_KEY = "7e31a880bfmshd82bc5ecf57a8bfp1a0d94jsn3baeaf31f08e";

export const getCategories = async () => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/bodyPartList`,
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("error: ", err.message);
  }
};

export const getExercises = async (category = "back") => {
  try {
    const options = {
      method: "GET",
      url: `${BASE_URL}/bodyPart/${category}`,
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("error: ", err.message);
  }
};
