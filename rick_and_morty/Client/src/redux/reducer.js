import { REMOVE_FAV, ADD_FAV, FILTER, ORDER, RESET } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters: [],
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
      const newOrden = state.allCharacters.sort((a, b) => {
        if (a.ide > b.ide) {
          return "A" === action.payload ? 1 : -1;
        }
        if (a.ide < b.ide) {
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
        myFavorites: [...state.allCharacters],
      };
    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;
