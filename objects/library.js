/* eslint-disable no-unused-vars */
const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  //const inspect = require('util').inspect;
  let keys = Object.keys(library["playlists"]);

  keys.forEach(element => {
    let playlistObj = library["playlists"];
    let current = playlistObj[element];
    let numTracks = current.tracks.length;

    console.log(`${element}: ${current.name} - ${numTracks}`);
  });
};


// prints a list of all trascks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  let keys = Object.keys(library["tracks"]);
  
  keys.forEach(element => {
    let tracksObj = library["tracks"];
    let indTrackObj = tracksObj[element];
    //console.log(indTrackObj);
    console.log(`${indTrackObj.id}: ${indTrackObj.name} by ${indTrackObj.artist} (${indTrackObj.album})`);
  });

};


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let playlist = library.playlists[playlistId];
  let trackIDs = playlist.tracks;
  let tracks = library.tracks;

  console.log(`${playlist.id}: ${playlist.name} - ${trackIDs.length} `);
  trackIDs.forEach(element => {
    let track = tracks[element];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album}) `);
  });

};


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  let playlist = library.playlists[playlistId];
  //console.log(playlist);
  playlist.tracks.push(trackId);
  //console.log(playlist);

};


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  let trackID = generateUid();
  let trackObject = {
    id: trackID,
    name: name,
    artist: artist,
    album: album
  };
  //console.log(trackObject);
  library.tracks[trackID] = trackObject;
};


// adds a playlist to the library
const addPlaylist = function(name) {
  let playlistID = generateUid();
  let playListObject = {
    id: playlistID,
    name: name,
    tracks: []
  };
  library.playlists[playlistID] = playListObject;
};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};

//printPlaylists();
//printTracks();
//printPlaylist("p01");
//addTrackToPlaylist("t02","p02");
//console.log(library);
addTrack("Phir Milenge", "Faisal K and Young Stunners", "Coke Studio");
addPlaylist("Workout");
console.log(library);
