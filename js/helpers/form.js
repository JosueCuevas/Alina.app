import { renderAnswer } from "../components/render-answer.js";

export function formSubmit() {
  const d = document,
    $formSong = "#form-song",
    $formContact = d.getElementById("#"),
    $loader = d.getElementById("loader");

  d.addEventListener("submit", async (e) => {
    if (e.target.matches($formSong)) {
      e.preventDefault();
      e.preventDefault();

      try {
        $loader.classList.remove("d-none");
        let $artist = e.target.artist.value.toLowerCase(),
          $song = e.target.song.value.toLowerCase(),
          artistAPI = `https://theaudiodb.com/api/v1/json/2/search.php?s=${$artist}`,
          songAPI = `https://api.lyrics.ovh/v1/${$artist}/${$song}`,
          artistFetch = fetch(artistAPI),
          lyricsFetch = fetch(songAPI),
          [artistAnswer, songAnswer] = await Promise.all([
            artistFetch,
            lyricsFetch,
          ]),
          artistData = await artistAnswer.json(),
          songData = await songAnswer.json();

        renderAnswer({ artistData, songData, $artist, $song });
      } catch (error) {}
    }
  });
}
