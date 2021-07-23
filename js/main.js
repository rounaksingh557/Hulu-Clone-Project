const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close");
const SectionTitle__container__down = document.querySelector(
  ".SectionTitle__container__down-arrow"
);

SectionTitle__container__down.addEventListener("click", goto);
loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick() {
  if (e.target == modal) {
    closeModal();
  }
}

function goto() {
  document.getElementById("live-sports").scrollIntoView();
}
