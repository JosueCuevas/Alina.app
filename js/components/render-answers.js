let songAnswer = "",
  artistAnswer = "";

export function songError(song) {
  if (/en/.test(window.location.pathname)) {
    songAnswer = `
    <h2 class="sorry-message">Sorry :(</h2>
    <p class="error-message">The song "<span class="third-color">${song}</span>" is not found in the database</p>
    `;
  } else {
    songAnswer = `
      <h2 class="sorry-message">Lo sentimos :(</h2>
      <p class="error-message">La canción "<span class="third-color">${song}</span>" no se encuentra en la base de datos</p>
      `;
  }
  return songAnswer;
}

export function songSucces(data) {
  songAnswer = `
    <h2 class="song-title">${data.$song.toUpperCase()}</h2>
    <blockquote class="lyrics">${data.songData.lyrics}</blockquote>
  `;
  return songAnswer;
}

export function artistError(artist) {
  if (/en/.test(window.location.pathname)) {
    artistAnswer = `
      <h2 class="sorry-message">Sorry :(</h2>
      <p class="error-message">The artist: "<span class="third-color">${artist}</span>" is not found in the database</p>
      `;
  } else {
    artistAnswer = `
    <h2 class="sorry-message">Lo sentimos :(</h2>
    <p class="error-message">El artista: "<span class="third-color">${artist}</span>" no fue encontrado en la base de datos</p>
    `;
  }
  return artistAnswer;
}

export function artistSuccess(artist) {
  if (/en/.test(window.location.pathname)) {
    artistAnswer = `
      <h2 class="t-center">About: \n <span class="third-color">"${
        artist.strArtist
      }"</span></h2>
      <img src="${artist.strArtistThumb || artist.strArtistFanart}" alt="${
      artist.strArtist
    }">
      <p>
        ${artist.intBornYear || "Artist's born year not found"} - ${
      artist.intDiedYear || "Present"
    }
      </p>
      <p>${artist.strCountry || ""}</p>
      <p>${artist.strGenre || ""} - ${artist.strStyle || ""}</p>
      <a href="http://${
        artist.strWebsite
      }" target = "_blank" class="third-color">Website</a>
      <p>${artist.strBiographyEN || "information not available"}</p>
      `;
  } else {
    artistAnswer = `
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
  return artistAnswer;
}
