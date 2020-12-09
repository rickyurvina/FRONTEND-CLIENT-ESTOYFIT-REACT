
import axios from 'axios';
import {BASE_URI,URI} from './base';

axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

const getSuggestionTags = async () => {
  const url = `${BASE_URI}front/getSuggestionTags`;
  
  const resp = await axios.get(url)
    .then(function (response) {
      console.log('RESPONSE tags', response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return resp;
}

export {
  getSuggestionTags,
  BASE_URI,
  URI
};