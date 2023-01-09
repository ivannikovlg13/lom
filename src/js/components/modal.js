function closeModal() {
  const modal = document?.querySelector("#modal");
  const close = document?.querySelector("#close");
  const page = document.querySelector(".page__body");
  close?.addEventListener("click", () => {
    modal.style.display = "none";
    page.style.overflow = "visible";
  });
}
closeModal();
