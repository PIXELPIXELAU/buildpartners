"use strict";

/* Main JS File */
//Setting global functions
window.app = {
  init: {}
}; //Setting jQuery

$(function () {
  $('.navbar-burger').on("click", function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});