let elModalClose = document.querySelector("#modalClose");
let elModalOpen = document.querySelectorAll(".modal-open");

elModalOpen.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".modal").classList.add("modal--open");
  });
});

elModalClose.addEventListener("click", () => {
  elModalClose.closest(".modal").classList.remove("modal--open");
});
