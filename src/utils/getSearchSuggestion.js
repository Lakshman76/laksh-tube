import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";

const getSearchSuggestion = async (searchQuery, setSuggestions, dispatch) => {
  try {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const jsonData = await response.json();
    setSuggestions(jsonData);
    dispatch(
      cacheResult({
        [searchQuery]: jsonData,
      })
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export default getSearchSuggestion;
