import { routes } from '../utils/constants';


export const getDefaultState = () => ({
  currentRoute: routes.map,
  selectedPointCoords: {},
});
