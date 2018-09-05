const contentful = require('contentful');

const SPACE_ID = '4rwm4imd4xz3';
const ACCESS_TOKEN = 'e4b9675284d2b8a90890faa8867eacd74a0b6f434ccf86395f43cdfb86249baa';

const api = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
});

export default api;
