import { YOUTUBE_VIDEOS_SEARCH_API } from "./constant";
import { addDetails } from "./videoSlice";

const getVideoBySearch = async (searchQuery, dispatch) => {
  try {
    const response = await fetch(YOUTUBE_VIDEOS_SEARCH_API + searchQuery);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const jsonData = await response.json();
    if (jsonData.items) {
      dispatch(addDetails(jsonData.items));
    }
  } catch (err) {
    console.error("Fetch error:", err);
  }
};

export default getVideoBySearch;
