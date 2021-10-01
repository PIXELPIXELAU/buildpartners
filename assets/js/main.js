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
    alert('We\'re sorry but there has been an issue submitting your form. Please contact us for further assistance.'))
}
const form = document.querySelector("form");
if (form) form.addEventListener("submit", handleSubmit);



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
