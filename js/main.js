// modal

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

// accordion

let elsAccordionToggle = document.querySelectorAll('.accordion__toggle');

elsAccordionToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.closest('.accordion').classList.toggle('accordion--active');
  })
})