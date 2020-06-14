$(document).ready(function () {
  $('#quantity').change(function () {
    var input = $(this).val(),
      price = $('.cart_main_desc_price').attr('value'),
      now_price = 0;
    now_price = price * input;

    $('.cart_main_desc_price').text('$' + now_price);

    console.log('input :', input, 'price :', price, 'now price :', now_price);
  });
});
