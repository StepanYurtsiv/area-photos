export const pages = {
  map: 'map',
  images: 'images',
};

const { REACT_APP_GMPAS_API_KEY } = process.env;

export const googleMapURL =
  `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GMPAS_API_KEY}&v=3.exp`;
