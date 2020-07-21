$(document).ready(function () {
  var currentlocation = window.location.href;
  var url = new URL(currentlocation);
  var url_cat = url.searchParams.get('category');
  var url_code = url.searchParams.get('code');

  console.log(localStorage.getItem('liked_elements'));

  //test localStorage liked_elements
  var local =
    localStorage.getItem('liked_elements') != null
      ? JSON.parse(localStorage.getItem('liked_elements'))
      : [];

  //Check for element if exists in localStorage array
  var check = function (cat, code, loc) {
    let arr = loc;

    if (arr.length < 1) {
      console.log(arr);

      return false;
    }
    console.log(arr);
    let objs = { category: cat, code: parseInt(code) };

    let check = arr.findIndex(
      (elm) => elm.category == objs.category && elm.code == objs.code,
    );

    //test if exists or not
    if (check == -1) {
      return false;
    } else {
      return true;
    }
  };

  $('.like_btn').click(function () {
    var state = $(this).attr('value');
    var like_btn = $('.like_btn');

    if (state == 'unlike') {
      $(this).attr('value', 'like');
      like_btn.addClass('text-danger');
      like_btn.removeClass('text-muted');

      if (check(url_cat, url_code, local) == false) {
        local.push({ category: url_cat, code: parseInt(url_code) });

        //turn elm variable to String

        let local_string = JSON.stringify(local);

        localStorage.setItem('liked_elements', local_string);
      }
    }
    if (state == 'like') {
      // alert('like');
      $.notify('اعجاب', 'success', {
        // if autoHide, hide after milliseconds
        autoHideDelay: 3000,
      });
      $(this).attr('value', 'unlike');
      like_btn.addClass('text-muted');
      like_btn.removeClass('text-danger');

      if (check(url_cat, url_code, local) == true) {
        let objs = { category: url_cat, code: parseInt(url_code) };

        let index = local.findIndex(
          (elm) => elm.category == objs.category && elm.code == objs.code,
        );

        let new_local = local.splice(local, index);

        localStorage.setItem('liked_elements', JSON.stringify(new_local));
      }
    }
  });

  if (localStorage.getItem('liked_elements') != null) {
    var c = JSON.parse(localStorage.getItem('liked_elements'));

    let obj = { category: url_cat, code: parseInt(url_code) };

    let check_like = c.findIndex(
      (elm) => elm.category == obj.category && elm.code == obj.code,
    );

    if (check_like != -1) {
      var like_btn = $('.like_btn');

      $('.like_btn').attr('value', 'like');
      like_btn.addClass('text-danger');
      like_btn.removeClass('text-muted');
    } else {
      var like_btn = $('.like_btn');
      $('.like_btn').attr('value', 'unlike');
      like_btn.addClass('text-muted');
      like_btn.removeClass('text-danger');
    }
  }
});
