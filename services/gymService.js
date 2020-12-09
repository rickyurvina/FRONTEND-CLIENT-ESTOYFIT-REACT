
import axios from 'axios';
import { BASE_URI, URI } from './base';

axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

const getGymBranchs = async (city) => {
  const url = `${BASE_URI}front/getGymBranchs/${city}`;
  
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

const updateRatingBranchs = async (id, form) => {
  const url = `${BASE_URI}front/updateGymBranchs/${id}`;
  axios.put(url, form)
    .then(response => {
      this.petitionGet();
      console.log('ACTUALIZADO EXITOSAMENTE')
    }).catch(error => {
      console.log(error.message);
    })
}



const getGymBranchsByActivity = async (activity, city) => {
  const url = `${BASE_URI}front/getGymBranchsByActivity/${activity}/${city}`;
  
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

const getGymBranchData = async (id) => {
  const url = `${BASE_URI}front/getGymBranchDetail/${id}`;
  
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

const getGymBranchsByFilter = async (sugestionId, search, nearIn) => {
  const url = `${BASE_URI}front/getGymBranchsByFilter`;
  const formData = new FormData();

  formData.append('suggestion_id', sugestionId);
  formData.append('text_suggestion', search);
  formData.append('text_suggestion_two', nearIn);

  console.log('to server ',sugestionId, search, nearIn)

  const resp = await axios.post(url, formData)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return resp;
}



export {
  getGymBranchs,
  getGymBranchsByActivity,
  getGymBranchsByFilter,
  getGymBranchData,
  BASE_URI,
  URI
};