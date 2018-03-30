const CLIENT_ID = 'CLIENT ID';
const REDIRECT_URI = 'http://localhost:8080/';
let accessToken = undefined;
let expiresIn = undefined;
let spotifyURL = 'https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}';

let Spotify = {
  // gets access token from Spotify
  getAccessToken() {
    if (accessToken) {
      return accessToken
    };
    let urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    let urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

    if (urlAccessToken && urlExpiresIn) {
      accessToken = urlAccessToken[1];
      expiresIn = urlExpiresIn[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      window.location = spotifyURL;
    };
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch('https://api.spotify.com/v1/search?type=track&q=term', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      // convert the returned response to json
      .then(response => response.json())
      .then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return []
        }
        return jsonResponse.tracks.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }))
      })
  }

}
export default Spotify;