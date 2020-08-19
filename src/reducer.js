export const initialState = {
  user: null, 
  playlists: [],
  s: null,
  playing: false,
  item: null,
  discover_weekly: null,
  top_artists: null,
  item: null
/*   token: '8oR6FYmFLoLhVllx1gAwl',
 */}

const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]e.g user

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

      case "SET_SPOTIFY":
        return {
          ...state,
          s: action.s,
        };

      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
    default:
      return state;
  }
}

export default reducer;
