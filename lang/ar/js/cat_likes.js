$(document).ready(function () {
  var currentlocation = window.location.href;
  var url = new URL(currentlocation);
  var url_params = url.searchParams.get('category');

  var local = localStorage.getItem('liked_elements');

  console.log(local);

  var like_icon = document.getElementsByClassName('like_btn ');
  var arr = JSON.parse(local);

  setTimeout(function () {
    var len = like_icon.length;
    $.each(arr, function (index, value) {
      for (var c = 0; c <= len - 1; c++) {
        if (
          $(like_icon.item(c)).attr('hash') == `${value.code}-${value.category}`
        ) {
          $(like_icon.item(c)).attr('hash');
          $(like_icon.item(c)).addClass('text-danger');
        }
      }
    });
  }, 1000);

  console.log(like_icon);
});
