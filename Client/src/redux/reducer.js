import { REMOVE_FAV, ADD_FAV, FILTER, ORDER, RESET, USER } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  user: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };
    case FILTER:
      const newFilter = state.allCharacters.filter(
        (per) => per.gender === action.payload
      );
      return {
        ...state,
        myFavorites: newFilter,
      };
    case ORDER:
      const newOrden = state.myFavorites.sort((a, b) => {
        if (a.id > b.id) {
          return "A" === action.payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "D" === action.payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: newOrden,
      };
    case RESET:
      return {
        ...state,
        myFavorites: state.allCharacters,
      };
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;
