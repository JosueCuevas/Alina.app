if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("Registro Exitoso", reg))
    .catch((err) => console.warn("Error al tratar de resgistrar el SW", err));
}
