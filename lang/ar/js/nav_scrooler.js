$(document).ready(function () {
  var nav = document.getElementById('top_nav');
  var navlink = $('.nav-link');
  var navlgo = $('.nav_logo h1');

  window.addEventListener('scroll', function () {
    let screen = window.pageYOffset;

    if (screen > 1) {
      nav.classList.add('top_nav_scroll');
      navlink.addClass('nav-link_scroll');
      navlgo.addClass('nav_logo_scroll');
    } else {
      nav.classList.remove('top_nav_scroll');
      navlink.removeClass('nav-link_scroll');
      navlgo.removeClass('nav_logo_scroll');
    }
  });
});
