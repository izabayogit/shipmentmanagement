import Axios from 'axios';

const isAuthenticated = (config = {}) => {
	return config.hasOwnProperty('isAuthenticated') && !!config.isAuthenticated;
}
const requestHandler = request => {
	if(isAuthenticated(request)) {
		request.headers['token'] = localStorage.getItem('authToken');
	}
	return request;
}
Axios.interceptors.request.use(request => requestHandler(request));
export default Axios;
