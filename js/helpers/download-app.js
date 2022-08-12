let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  deferredPrompt = e;
});

export async function downloadApp() {
  console.log(deferredPrompt);
  if (deferredPrompt !== null) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      deferredPrompt = "null";
    }
  }
}
