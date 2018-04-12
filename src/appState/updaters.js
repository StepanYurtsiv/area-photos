import { stringify } from 'query-string';

export const setSelectedPointCoords = state => selectedPointCoords =>
  ({ ...state, selectedPointCoords });

export const setPage = state => (page, params) => {
  window.location.hash = stringify({
    page,
    ...params,
  });

  return { ...state, currentPage: page };
};

export const setAvailableImgDates = state => availableImageDates =>
  ({ ...state, availableImageDates });
