export function notReadyYet() {
  if (/en/.test(window.location.pathname)) {
    confirm(
      " This feature is not available yet, \n please wait for the next updates :)"
    );
  } else {
    confirm(
      "Esta funcionalidad no está disponible aún, \nespera las próximas actualizaciones :)"
    );
  }
}
