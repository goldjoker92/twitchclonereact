import axios from'axios';

let api = axios.create({
    headers: {
        'Client-ID' :"wv30m721fsimdnvdsa5w9ph28ztkph",
        "Authorization": "Bearer j4tfbpu8m6octy06o1urbb6oetmwmy"
    }
}) 

/* CLIENT_ID = wv30m721fsimdnvdsa5w9ph28ztkph
REDIRECT =  http://192.168.1.41/

LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id={CLIENT_ID}&redirect_uri={REDIRECT}&response_type=token

LIEN REMPLI = https://id.twitch.tv/oauth2/authorize?client_id=wv30m721fsimdnvdsa5w9ph28ztkph&redirect_uri=http://192.168.1.41/&response_type=token


*/
export default api;

