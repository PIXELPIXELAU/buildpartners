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

  
  

const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('form__contact');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => {

    myForm.hidden = true
    myForm.nextElementSibling.hidden = false

  }).catch((error) =>
    alert(error))
}
document.querySelector("form").addEventListener("submit", handleSubmit);



  })();

const nav = document.querySelector('.navbar');
const navTop = nav.offsetTop;

let waitForScroll;
function stickyNavigation() {
  // console.log('navTop = ' + navTop);
  clearTimeout(waitForScroll)
  waitForScroll = setTimeout(function(){
    // console.log(`${scrollY}//${nav.offsetHeight}`);
    if (window.scrollY > nav.offsetHeight) {
      // nav offsetHeight = height of nav
      // document.body.style.paddingTop = nav.offsetHeight + 'px';
      nav.classList.add('is-stuck');
    
    } else {
      // document.body.style.paddingTop = 0;
      nav.classList.remove('is-stuck');
    }
  },200)
  waitForScroll;
  
}

window.addEventListener('scroll', stickyNavigation);

$(function(){

  //Form Submissions


  
  //Scrollable logos
  if ($('.scroll__wrapper').lenght > 0 ) {
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
  };
    

  
});
// $(function() {
//   $('.navbar-burger').on("click", function() {
//     $(".navbar-burger").toggleClass("is-active");
//     $(".navbar-menu").toggleClass("is-active");
//   })
// });
