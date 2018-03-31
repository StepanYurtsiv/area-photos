export const fromLatLng = ({ lat, lng }) => ({ lat: lat(), lng: lng() });
export const toLatLng = window => window.google.maps.LatLng;
