export const setSelectedPointCoords = state => selectedPointCoords =>
  ({ ...state, selectedPointCoords });

export const setRoute = state => route =>
  ({ ...state, currentRoute: route });
