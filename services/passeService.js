
import axios from 'axios';
import {BASE_URI,URI} from './base';

const getHotDealPasses = async (sessionCity) => {
  const url = `${BASE_URI}front/getHotDealPasses/${sessionCity}`;
  // const formData = new FormData();
  const resp = await axios.get(url)
    .then(function (response) {
      console.log('RESPONSE branchs', response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return resp;
}

export {
  getHotDealPasses,
  BASE_URI,
  URI
};