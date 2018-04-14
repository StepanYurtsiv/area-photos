export const fromLatLng = ({ lat, lng }) => ({ lat: lat(), lng: lng() });
export const toLatLng = window => (lat, lng) => new window.google.maps.LatLng(lat, lng);
