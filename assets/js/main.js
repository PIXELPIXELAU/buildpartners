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

$(function(){
  const scrollLeft = $('.scroll__wrapper .columns').scrollLeft();
  const count = $('.scroll__wrapper .column').length
  const scrollBy = 240;
  // $('.scroll__wrapper .columns').scrollLeft(0);
  $('.scroll__wrapper .columns')[0].scroll({
    left: 0,
    top: 0,
    behavior: 'smooth'
});
  for (var i=0;i<count;i++) {
    console.log(i)
    setTimeout(function(index){
      console.log(index,scrollLeft,count,scrollBy,(scrollBy * index))
      $('.scroll__wrapper .columns')[0].scroll({
          left: scrollBy * index ,
          top: 0,
          behavior: 'smooth'
      });
    },3000*i,(i))
    
  }
  
})
// $(function() {
//   $('.navbar-burger').on("click", function() {
//     $(".navbar-burger").toggleClass("is-active");
//     $(".navbar-menu").toggleClass("is-active");
//   })
// });
