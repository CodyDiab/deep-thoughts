import decode from 'jwt-decode';

class AuthService {
// retrieve data saved in token
getProfile() {
    return decode(this.getToken())
}
//check if user is still logged in
loggedIn() {
    //check if there is a saved valid token
    const token = this.getToken();
    // use type coersion to check if token is NOT undefined and the token is NOT expired
    return !!token&& !this.isTokenExpired(token);
}

// check if token has expired
isTokenExpired(token){
    try{
        const decoded = decode(token);
        if (decoded.exp < Date.now()/1000) {
            return true;
        }else {
            return false;
        }
    } catch (err) {
        return false;
    }
 }

 //retrieve token from localStorage
 getToken() {
     return localStorage.getItem('id_token');
 }

 //set token to localStorage
 login(idToken) {
     //save to localStorage
     localStorage.setItem('id_token', idToken);

     window.location.assign('/')

 }

 //clare token from localStorage and froce logout with reload
 logout() {
     //clear user token and profile datat from l.s.
     localStorage.removeItem('id_token');
     //this will reload and reset state of app
     window.location.assign('/')
 }
}

export default new AuthService();