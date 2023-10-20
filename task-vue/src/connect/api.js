import wretch from 'wretch';

const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const api = wretch(apiURL);

export default api;