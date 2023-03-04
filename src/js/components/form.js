const btn = document.querySelector(".form__btn");
if (btn) {
  document.querySelector(".form__btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("modal").style.display = "block";
    document.querySelector(".page__body").style.overflow = "hidden";
  });
}
