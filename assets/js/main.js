/* Main JS File */

//Setting global functions
window.app = {
  init : {}
};

(() => {
  const burger = document.querySelector('.navbar-burger');

  if (burger) {
    burger.addEventListener('click', () => {
      const menu = document.getElementById(burger.dataset.target);

      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    })
  }
})()

// $(function() {
//   $('.navbar-burger').on("click", function() {
//     $(".navbar-burger").toggleClass("is-active");
//     $(".navbar-menu").toggleClass("is-active");
//   })
// });
