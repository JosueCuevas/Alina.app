import {
  artistError,
  artistSuccess,
  songError,
  songSucces,
} from "./render-answers.js";

export async function controlAnswer(requestData) {
  const d = document,
    $song = d.getElementById("song-answer"),
    $artist = d.getElementById("artist-answer"),
    $loader = d.getElementById("loader");

  // console.log(song, artist);

  let $artistTemplate, $songTemplate;

  if (requestData.songData.error) {
    $songTemplate = songError(requestData.$song);
  } else {
    $songTemplate = songSucces(requestData);
  }

  if (requestData.artistData.artists === null) {
    $artistTemplate = artistError(requestData.$artist);
  } else {
    $artistTemplate = artistSuccess(requestData.artistData.artists[0]);
  }

  $loader.classList.add("d-none");

  $artist.innerHTML = $artistTemplate;
  $song.innerHTML = $songTemplate;
}
