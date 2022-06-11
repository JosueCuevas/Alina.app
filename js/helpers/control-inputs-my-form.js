export function FormsLabel() {
  if (window.location.href.includes("contacto")) {
    const d = document,
      $form = d.querySelector(".contact-form"),
      $name = d.querySelector(".name"),
      $email = d.querySelector(".email");
    $form.comments.value = "";
    $form.addEventListener("keyup", (e) => {
      if (e.target === $form.name) {
        $form.name.value.length === 0
          ? $name.classList.remove("fixed")
          : $name.classList.add("fixed");
      }
      if (e.target === $form.email) {
        $form.email.value.length === 0
          ? $email.classList.remove("fixed")
          : $email.classList.add("fixed");
      }
    });
  }
}
