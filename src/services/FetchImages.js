import axios from "axios";

let searchQuery;
const FetchImagesWithQuery = (query, page = 1) => {
  searchQuery = query;
  return axios
    .get(
      `https://pixabay.com/api/?key=15609194-ce2174c73742f49a4a6c8544d&q=${searchQuery}&image_type=photo&page=${page}&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default FetchImagesWithQuery;
