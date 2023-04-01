import { ADD_FAV, REMOVE_FAV , ORDER, FILTER} from "./actions";

const initialState = {
    data:[],
  myFavs: [],
  allCharacter:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavs: [...state.myFavs, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavs: state.myFavs.filter((char) => char.id !== parseInt(action.payload)),
      };
      case FILTER:
        return{

        }
        case ORDER:
            return{

            }
    default:
      return { ...state };
  }
};

export default rootReducer;