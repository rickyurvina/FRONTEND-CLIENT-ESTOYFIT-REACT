
import axios from 'axios';
import { BASE_URI, URI } from './base';

function setConfig(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  return config;

}


const authAxiosUser = async (email, password) => {
  const result = await axiosTest(email, password);
  console.log('RESULTADO => ', result);

  return result;
}

const axiosTest = async (email, password) => {
  const url = `${BASE_URI}auth/login`;
  const formData = new FormData();

  formData.append('email', email);
  formData.append('password', password);

  const resp = await axios.post(url, formData)
    .then(function (response) {
      console.log('RESPONSE ', response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return resp;
}

const axiosGoogle = async (object) => {
  const url = `${BASE_URI}auth/loginGoogle`;
  const formData = new FormData();
  const { email, name, imageUrl } = object;

  formData.append('email', email);
  formData.append('name', name);
  formData.append('image_profile', imageUrl);

  const resp = await axios.post(url, formData)
    .then(function (response) {
      console.log('RESPONSE ', response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return resp;
}

const signupAxiosUser = async (name, lastName, email, password) => {
  const url = `${BASE_URI}auth/signupClient`;
  const formData = new FormData();

  formData.append('name', name);
  formData.append('last_name', lastName);
  formData.append('email', email);
  formData.append('password', password);

  const resp = await axios.post(url, formData)
    .then(function (response) {
      console.log('RESPONSE ', response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return resp;
}

const setCityUser = async (city, userData) => {
  const { access_token } = userData;
  const config = setConfig(access_token);

  const url = `${BASE_URI}auth/setUserCity`;
  const formData = new FormData();

  formData.append('city', city);

  const resp = await axios.post(url, formData, config)
    .then(function (response) {
      console.log('RESPONSE ', response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return resp;
}


const getCardsByUser = async (userDataObject) => { 
  const { access_token, userData } = userDataObject;
  const config = setConfig(access_token);

  const url = `${BASE_URI}front/getCardsByUser`;
  const formData = new FormData();
  const { id } = userData;

  formData.append('user_id', id);

  const resp = await axios.post(url, formData, config)
    .then(function (response) {
      console.log('RESPONSE ', response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return resp;
}

const getLink = async (userDataObject, amountObject) => { 
  const { access_token, userData } = userDataObject;
  const config = setConfig(access_token);

  const url = `${BASE_URI}front/paymentTest`;
  const formData = new FormData();

    // user_id
    // document
    // documentType
    // fullName
    // address
    // mobile
    // email
    // amount
    // amountWithTax
    // amountWithoutTax
    // tax
  const { id, documento, email, name, mobile, main_street } = userData;
  const { amount, amountWithTax, amountWithoutTax, tax} = amountObject;

  formData.append('user_id', id);
  formData.append('document', '1713233920');
  formData.append('documentType', '01');
  formData.append('fullName', name);
  formData.append('address', main_street);
  formData.append('mobile', mobile);
  formData.append('email', email);
  formData.append('amount', amount);
  formData.append('amountWithTax', amountWithTax);
  formData.append('amountWithoutTax', amountWithoutTax);
  formData.append('tax', tax);

  const resp = await axios.post(url, formData, config)
    .then(function (response) {
      console.log('RESPONSE ', response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return resp;
}

const executePayment = async (userDataObject, amountObject, cardId) => { 
  const { access_token, userData } = userDataObject;
  const config = setConfig(access_token);

  const url = `${BASE_URI}front/executePayment`;
  const formData = new FormData();

  const { id, documento, email, name, mobile, main_street } = userData;
  const { amount, amountWithTax, amountWithoutTax, tax} = amountObject;

  
  formData.append('card_id', cardId);
  formData.append('user_id', id);
  formData.append('document', documento);
  formData.append('documentType', '01');
  formData.append('fullName', name);
  formData.append('address', main_street);
  formData.append('mobile', mobile);
  formData.append('email', email);
  formData.append('amount', amount);
  formData.append('amountWithTax', amountWithTax);
  formData.append('amountWithoutTax', amountWithoutTax);
  formData.append('tax', tax);

  const resp = await axios.post(url, formData, config)
    .then(function (response) {
      console.log('RESPONSE ', response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return resp;
}





export {
  authAxiosUser,
  signupAxiosUser,
  axiosGoogle,
  setCityUser,
  getLink,
  executePayment,
  getCardsByUser,
  BASE_URI,
  URI
};