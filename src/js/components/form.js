import axios from "axios";
import Inputmask from "inputmask";

const TOKEN = "5957807969:AAHkOZbVx_1OKTcQPYfSvm-03lPizeJ2G9w";
const CHATID = "-664300891<";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("tg")?.addEventListener("submit", function (e) {
  e.preventDefault();

  let checkbox = document.querySelectorAll(".checkbox");
  let boxData = [];
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      boxData.push(checkbox[i].value);
      break;
    }
  }

  let message = `<b>НОВАЯ ЗАЯВКА</b>\n`;
  message += `<b>Город: </b> ${boxData}\n`;
  message += `<b>Отправитель: </b> ${this.name.value}\n`;
  message += `<b>Вещество: </b> ${this.metall.value}\n`;
  message += `<b>Вес: </b> ${this.weight.value}\n`;
  message += `<b>Телефон: </b> ${this.phone.value}`;

  axios
    .post(URI_API, {
      chat_id: CHATID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      this.name.value = "";
      this.metall.value = "";
      this.weight.value = "";
      this.phone.value = "";
      document.getElementById("modal").style.display = "block";
      document.querySelector(".page__body").style.overflow = "hidden";
    })
    .catch((err) => console.warn(err))
    .finally();
});
export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error("Нет такого селектора!");
    return false;
  }

  if (!rules) {
    console.error("Вы не передали правила валидации!");
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask("+38 (999) 999-99-99");
    inputMask.mask(telSelector);

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: "function",
          validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: item.telError,
        });
      }
    }
  }
};
