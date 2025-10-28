// Base URL same format me
const localMachine = 'http://192.168.1.5:8080';
export const BASE_URL = localMachine;

// Endpoints
const endPoints = {
  login: 'login',
};

// Full API URLs for APIs
const API_URLS = {
  LOGIN: `${BASE_URL}/${endPoints.login}`,
};


// Simple Image/File URL Builder
export const getFileUrl = (filePath = '') => {
  if (!filePath) return '';
  const cleanPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
  return `${BASE_URL}/getFiles/${cleanPath}`;
};

export default API_URLS;
