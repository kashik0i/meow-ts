import axios from "axios";
const key = "";
const meowRequest = async () => {
  try {
    const response = await axios.get(
      `https://thecatapi.com/v1/images/search?api_key=${key}&mime_types=gif`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default meowRequest;
