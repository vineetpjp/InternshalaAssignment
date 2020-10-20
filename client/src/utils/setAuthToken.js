import axios from 'axios'
//sets jwt token to the header of every axios request

const setAuthToken = (token) =>{
    if(token)
        axios.defaults.headers.common['jwtToken'] = token;
    else
        delete axios.defaults.headers.common['jwtToken'];
}

export default setAuthToken;