const CATS_API_BASEURL = "https://api.thecatapi.com/v1/images/search";

const SUPER_DOPER_SECRET_API_KEY='49b003a3-d34e-47fb-8da4-23f7bc9ea11e';

const CATS_API_LIMIT = 15;

const CATS_API_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'x-api-key': SUPER_DOPER_SECRET_API_KEY
};

export { 
  CATS_API_BASEURL,
  CATS_API_HEADERS,
  CATS_API_LIMIT
};