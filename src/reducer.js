export const initialState = {
  user: null, 
  playlists: [],
  playing: false,
  item: null,
  token: '8oR6FYmFLoLhVllx1gAwl'
}

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
      }
  
    default:
      return state;
  }
}

export default reducer;
