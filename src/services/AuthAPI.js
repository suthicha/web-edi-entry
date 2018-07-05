import axios from '../common/utils/axios';
import delay from '../common/utils/delay';
// import * as Cookies from 'js-cookie';

const login = (email, password) => {
    return delay().then(()=>{
        return new Promise((resolve, reject)=>{
            axios.post(`/oauth2/token`,{
                email,
                password
            })
            .then(results => {
                // do something
                resolve(results);
            })
            .catch(error => {
                // do something
                reject(error);
            })
        });
    });
};

module.exports = {
    login
}