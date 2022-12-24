function closeModal() {
  const modal = document?.querySelector("#modal");
  const close = document?.querySelector("#close");
  close?.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
closeModal();
