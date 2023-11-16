import {
  MAIN_ADS,
  RESTAURANTS,
  SHOWS,
} from './Data.jsx';

const initialStore = () => {
  const store = {
    mainAds: MAIN_ADS,
    restaurants: RESTAURANTS,
    shows: SHOWS,
  };
  return store;
};

const types = {
  setRestaurantInfo: "setRestaurantInfo",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.setRestaurantInfo:
      return {
        ...state,
        restaurantInfo: state.restaurantInfo.push(...action.payload),
      };

    default:
      return state;
  }
};

export { types };
export { initialStore };
export default storeReducer;