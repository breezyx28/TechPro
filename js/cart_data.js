$(document).ready(function () {
  var currentlocation = window.location.href,
    url = new URL(currentlocation),
    category = url.searchParams.get('category'),
    code = url.searchParams.get('code');

  if (!category && !code) {
    // alert('Wrong Direction ......');
    $.notify('Wrong Direction ..... ', 'error', {
      // if autoHide, hide after milliseconds
      autoHideDelay: 3000,
    });
    window.location.href = '/shop.html';
  }

  let pages = ['spares', 'clothes', 'Electronics', 'furniture'];

  if (pages.includes(category)) {
    $('.prev_page')
      .text(category)
      .attr('href', 'category.html?category=' + category);
  }

  var items = [],
    clo = [],
    elec = '',
    furn = '',
    spares = '';
  //get JSON from External file
  $.getJSON('../json/category.json', function (data) {
    $.each(data, function (index, value) {
      items.push(data);
    });
  });

  function contents(cat) {
    setTimeout(function () {
      $.each(items, function (index, value) {
        if (cat == 'clothes') {
          $('.cart_main_desc_title').html(value.category.clothes[code].name);
          $('.cart_main_desc_price').attr(
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
          $('.cart_main_desc_title').html(value.category.Furniture[code].name);
          $('.cart_main_desc_price').attr(
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
          $('.cart_main_desc_title').html(
            value.category.Electronics[code].name,
          );
          $('.cart_main_desc_price').attr(
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
        if (cat == 'spares') {
          $('.cart_main_desc_title').html(value.category.spares[code].name);
          $('.cart_main_desc_price').attr(
            'value',
            value.category.spares[code].price,
          );
          $('.cart_main_desc_price').html(
            '$' + value.category.spares[code].price,
          );
          $('.cart_mian_img_holder > img').attr(
            'src',
            value.category.spares[code].image_url,
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
    case 'spares':
      contents('spares');
      break;
    case 'Electronics':
      contents('Electronics');
      break;
    default:
      break;
  }

  $('.cart_main_desc_buy_btn').click(function () {
    //disable link after request
    $(this).css('pointer-events', 'none');

    var quantity = $('#quantity').val(),
      total_price = $('.cart_main_desc_price ').text(),
      product_name = $('.cart_main_desc_title ').text();

    Email.send({
      SecureToken: 'df7da04b-a5b2-46c6-b9fc-875ff5e529f3',
      To: 'mohamedx.28@gmail.com',
      From: 'web.technicalproffessional@gmail.com',
      Subject: 'Web Order',
      Body: `Product Name : ${product_name},
              Category : ${category},
              Code : #${code},
              Quantity : ${quantity},
              Total Price : ${total_price}`,
    }).then((message) => {
      if (message == 'OK') {
        //enable link after request is done
        $(this).css('pointer-events', 'auto');
        $.notify('Your Order has been sent successfuly ..... ', 'success', {
          // if autoHide, hide after milliseconds
          autoHideDelay: 3000,
        });
        // alert('Your Order has been sent successfuly .....');
      }
    });
  });
});
