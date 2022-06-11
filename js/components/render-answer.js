export async function renderAnswer(requestData) {
  const d = document,
    $song = d.getElementById("song-answer"),
    $artist = d.getElementById("artist-answer"),
    $loader = d.getElementById("loader");

  // console.log(song, artist);

  let $artistTemplate, $songTemplate;

  if (requestData.songData.error) {
    $songTemplate = `
    <h2 class="sorry-message">Lo sentimos :(</h2>
    <p class="error-message">La canción "<span class="third-color">${requestData.$song}</span>" no se encuentra en la base de datos</p>
    `;
  } else {
    $songTemplate = `
          <h2 class="song-title">${requestData.$song.toUpperCase()}</h2>
          <blockquote class="lyrics">${requestData.songData.lyrics}</blockquote>
          `;
  }

  if (requestData.artistData.artists === null) {
    $artistTemplate = `
    <h2 class="sorry-message">Lo sentimos :(</h2>
    <p class="error-message">El artista: "<span class="third-color">${requestData.$artist}</span>" no fue encontrado en la base de datos</p>
    `;
  } else {
    let artist = requestData.artistData.artists[0];
    $artistTemplate = `
          <h2 class="t-center">Acerca de: \n <span class="third-color">"${
            artist.strArtist
          }"</span></h2>
          <img src="${artist.strArtistThumb || artist.strArtistFanart}" alt="${
      artist.strArtist
    }">
          <p>
            ${artist.intBornYear || "Fecha de inicio no encotrada"} - ${
      artist.intDiedYear || "Presente"
    }
          </p>
          <p>${artist.strCountry || ""}</p>
          <p>${artist.strGenre || ""} - ${artist.strStyle || ""}</p>
          <a href="http://${
            artist.strWebsite
          }" target = "_blank" class="third-color">Sitio Web</a>
          <p>${
            artist.strBiographyES ||
            artist.strBiographyEN ||
            "Información no disponible"
          }</p>
          `;
  }

  $loader.classList.add("d-none");

  $artist.innerHTML = $artistTemplate;
  $song.innerHTML = $songTemplate;
}
