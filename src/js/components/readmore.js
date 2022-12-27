let noOfCharac = 150;
let contents = document.querySelectorAll(".offers__text");

contents.forEach((content) => {
  if (content.textContent.length < noOfCharac) {
    content.nextElementSibling.style.display = "none";
  } else {
    let displayText = content.textContent.slice(0, noOfCharac);
    let moreText = content.textContent.slice(noOfCharac);
    content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
  }
});
