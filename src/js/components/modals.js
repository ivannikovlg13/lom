import GraphModal from "graph-modal";
const modal = new GraphModal();

function openModal() {
  const BASE_URL = "http://localhost:3000/";
  const btns = document.querySelectorAll("#offers__btn");
  const img = document.querySelector("#popup__image");
  const title = document.querySelector(".main-title--name");
  const closeBtn = document.querySelector(".graph-modal__close");
  const popupText = document.querySelector(".popup__text");

  btns.forEach((btn) =>
    btn.addEventListener("click", () => {
      //Выведение активной картинки
      const activeImage = btn.closest("div[title]").title;
      // const activeText = `${popupText}-${activeImage}`;
      img.src = `${BASE_URL}img/${activeImage}.avif`;
      // //Выведение активного тайтла
      // title.innerHTML = activeImage;
      // //Выведение активного текста
      // popupText.classList = activeText.replace(".", "");
      // popupText.style.display = "block";
      // console.log(activeText);
    })
  );
  // closeBtn?.addEventListener("click", () => {
  //   title.classList = "main-title--name";
  //   popupText.classList = "popup__text";
  // });
}

openModal();
