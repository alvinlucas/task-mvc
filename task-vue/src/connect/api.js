import wretch from 'wretch';

const api = wretch(import.meta.env.VITE_API_URL);

export default api;