import axios from 'axios';
import { BASE_URI, URI } from './base';

axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

const getActiveVacancies = async () =>{
    const url = `${BASE_URI}vacancies/getActiveVacancies`;

    const response = await axios.get(url)
    .then(function (response){
        console.log('Response Vacancies',response);
        return response;
    })
    .catch(function(error){
        console.log(error);
    })
}

export{
    getActiveVacancies,
    BASE_URI,
    URI
}