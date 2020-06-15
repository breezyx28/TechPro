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
      // clo.push(value.clothes);
      // elec = value.Electronics;
      // furn = value.Furniture;
      // food = value.food;
    });
  });

  function contents(cat) {
    setTimeout(function () {
      $.each(items, function (index, value) {
        if (cat == 'clothes') {
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
        }
        if (cat == 'furniture') {
          console.log(value.category.Furniture[code]);
          $('.cart_main_desc_title').html(value.category.Furniture[code].name);
          let price = $('.cart_main_desc_price').attr(
            'value',
            value.category.Furniture[code].price,
          );
          $('.cart_main_desc_price').html(
            '$' + value.category.Furniture[code].price,
          );
          $('.cart_mian_img_holder > img').attr(
            'src',
            value.category.Furniture[code].image_url,
          );
        }
        if (cat == 'Electronics') {
          console.log(value.category.Electronics[code]);
          $('.cart_main_desc_title').html(
            value.category.Electronics[code].name,
          );
          let price = $('.cart_main_desc_price').attr(
            'value',
            value.category.Electronics[code].price,
          );
          $('.cart_main_desc_price').html(
            '$' + value.category.Electronics[code].price,
          );
          $('.cart_mian_img_holder > img').attr(
            'src',
            value.category.Electronics[code].image_url,
          );
        }
        if (cat == 'food') {
          console.log(value.category.food[code]);
          $('.cart_main_desc_title').html(value.category.food[code].name);
          let price = $('.cart_main_desc_price').attr(
            'value',
            value.category.food[code].price,
          );
          $('.cart_main_desc_price').html(
            '$' + value.category.food[code].price,
          );
          $('.cart_mian_img_holder > img').attr(
            'src',
            value.category.food[code].image_url,
          );
        }
      });
    }, 1000);
  }

  switch (category) {
    case 'clothes':
      contents('clothes');
      break;
    case 'furniture':
      contents('furniture');
      break;
    case 'food':
      contents('food');
      break;
    case 'Electronics':
      contents('Electronics');
      break;
    default:
      break;
  }
});
