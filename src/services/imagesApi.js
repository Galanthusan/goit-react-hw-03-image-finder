import axios from 'axios';

const fetchImagesWithQuery = (
  searchQuery,
  page = 1,
  apiKey = '17820994-9f31f9cb0d4f96d74b3464930'
) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default { fetchImagesWithQuery };
