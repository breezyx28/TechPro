$(document).ready(function () {
  var currentlocation = window.location.href,
    url = new URL(currentlocation),
    category = url.searchParams.get('category'),
    code = url.searchParams.get('code');

  var items = [],
    clo = [],
    elec = '',
    furn = '',
    food = '';
  //get JSON from External file
  $.getJSON('../json/category.json', function (data) {
    $.each(data, function (index, value) {
      items.push(data);
      clo.push(value.clothes);
      elec = value.Electronics;
      furn = value.Furniture;
      food = value.food;
    });
  });

  function contents() {
    setTimeout(function () {
      $.each(items, function (index, value) {
        console.log(value.category.clothes[code]);
        $('.cart_main_desc_title').html(value.category.clothes[code].name);
        let price = $('.cart_main_desc_price').attr(
          'value',
          value.category.clothes[code].price,
        );
        $('.cart_main_desc_price').html(
          '$' + value.category.clothes[code].price,
        );
        $('.cart_mian_img_holder > img').attr(
          'src',
          value.category.clothes[code].image_url,
        );
      });
    }, 1000);
  }

  switch (category) {
    case 'clothes':
      contents();
      break;

    default:
      break;
  }
});
