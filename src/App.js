import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromResponse } from './spotify';
import  SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from './StateProvider';


const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateProviderValue();

  // Run code base on a given condition
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

        spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );


      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });

      spotify.getPlaylist(`${token}`).then(response => {
        dispatch({
          type: 'SET_DISCOBER_WEEKLY',
          discover_weekly: response,
        });
      });

      dispatch({
        type: "SET_SPOTIFY",
        s: spotify,
      });
    }
  }, [token,dispatch]);



  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ): (
          <Login />
        )
      }

    </div>
  );
}

export default App;
