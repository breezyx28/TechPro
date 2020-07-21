$(document).ready(function () {
  var total_product = function (total) {
    $('#total_product').text(total);
  };
  var tr = function (cat, img, name, price, code) {
    let tr = `<tr class="bg-white border-bottom">
                <td class="align-middle d-flex flex-row align-items-center">
                <a href="cart.html?category=${cat}&code=${code}" style="text-decoration:none">
                <img
                    src="../../${img}"
                    width="80"
                    height="80"
                    class="product_img"
                    alt=""
                />
                <a>
                <p class="product_name ml-3">${name}</p>
                </td>
                <td class="align-middle text-center"><input
                    type="number"
                    name="quantity"
                    id="shopping_quantity"
                    class="shopping_quantity border pl-4 pr-4 pt-2 pb-2 text-center"
                    style="width: 14vw;background-size:cover;"
                    min="1"
                    value="1"
                /></td>
                <td class="align-middle"><div class="remove bg-danger text-white p-2 text-center" value1="${code}" value2="${cat}">
                    x
                </div></td>
                <td class="align-middle"> <div class="price text-dark text-center">
                    <b>$</b><b class="single_price" value="${price}">${price}</b></td>
            </tr>`;
    $('.shopping_cart_table_rows').append(tr);
  };

  //   external file
  $.getJSON('../../../json/category_ar.json', function (data) {
    var local_array = JSON.parse(localStorage.getItem('key'));

    total_product(local_array.length);

    function compare(data1) {
      $.each(data1, function (index1, value1) {
        $.each(local_array, function (index2, value2) {
          if (value1.clothes[value2.code] && value2.category == 'clothes') {
            let a = value1.clothes[value2.code];
            tr(value2.category, a.image_url, a.name, a.price, value2.code);
          }
          if (value1.Furniture[value2.code] && value2.category == 'furniture') {
            let a = value1.Furniture[value2.code];
            console.log(a);

            tr(value2.category, a.image_url, a.name, a.price, value2.code);
          }
          if (value1.food[value2.code] && value2.category == 'food') {
            let a = value1.food[value2.code];
            tr(value2.category, a.image_url, a.name, a.price, value2.code);
          }
          if (
            value1.Electronics[value2.code] &&
            value2.category == 'Electronics'
          ) {
            let a = value1.Electronics[value2.code];
            tr(value2.category, a.image_url, a.name, a.price, value2.code);
          }
        });
      });
    }
    if (local_array == '' || local_array == false) {
      $('.shopping_cart_table_rows').append(
        '<tr class="text-center"><td colspan="4">لا يوجد بيانات</td></tr>',
      );
    }
    compare(data);
  });

  //counting quantities
  var total = function () {
    setTimeout(function () {
      var shop_quan = 0;
      var len = document.getElementsByClassName('shopping_quantity').length;
      var shop = document.getElementsByClassName('shopping_quantity');
      var tot_quan = document.getElementsByClassName('total_quantity');

      for (let c = 0; c < len; c++) {
        shop_quan += parseInt(shop.item(c).value);
        $('.total_quantity').text(shop_quan);
      }

      //changing total quantity onchange ..........
      $(document).on('change', '.total_quantity', function () {
        $(this).text(shop_quan);
      });

      ////////////////////////////////////
      var shop_price = 0;
      var price_len = document.getElementsByClassName('single_price').length;
      var price = document.getElementsByClassName('single_price');
      var tot_pri = document.getElementById('total_price');

      for (let p = 0; p < price_len; p++) {
        shop_price += parseFloat(price.item(p).innerHTML);
        $('#total_price').text(shop_price);
      }

      console.log(
        'shop quantity : ',
        shop_quan,
        ' price length : ',
        price_len,
        ' shop price',
        shop_price,
      );

      //changing total quantity onchange ..........
      $(document).on('change', '.remove', function () {
        $(this).text(shop_quan);
        $(this).text(shop_price);
      });
    }, 100);
  };

  setTimeout(() => {
    total();
  }, 100);

  //changing price onchange ..........
  // .
  // ..
  // ...
  // ....
  $(document).on('change', '.shopping_quantity', function () {
    var val = $(this).val();
    var par = $(this).parent().parent();

    //get price of element onchange and turn it to array
    var single_price = $(par[0])
      .map(function () {
        return $('td > .price > .single_price', this).attr('value');
      })
      .toArray();

    //getting the above value and multiply it by price
    var d = $(par[0]).map(function () {
      return $('td > .price > .single_price', this).text(
        val * parseFloat(single_price[0]),
      );
    });

    //refresh the price value on every change event
    total();
  });

  ///////////////////////////

  var local_check = localStorage.getItem('key');
  console.log(local_check);

  //Stoping Buttons from process when localStorage "key" is Empty
  var block_btn = function (a) {
    console.log(a);
    if (a == null || a == '[]') {
      $('#final_checkout').removeClass('bg-matte');
      $('#final_checkout').addClass('bg-secondary');
      $('#final_checkout').css('pointer-events', 'none');
      /////////////////////////////////////////////////////////////
      $('.remove_all').removeClass('bg-danger');
      $('.remove_all').addClass('bg-secondary');
      $('.remove_all').css('pointer-events', 'none');
    }
  };

  //removing elemenet from cart
  // .
  // ..
  // ...
  // ....
  $(document).on('click', '.remove ', function () {
    var delete_code = $(this).attr('value1'),
      delete_cat = $(this).attr('value2'),
      local = JSON.parse(localStorage.getItem('key'));

    console.log(local);

    if (
      confirm('Do You Realy want to remove this item form the basket .... ?') ==
      true
    ) {
      //getting index of clicked element to remove from localStorage array
      let index = local.findIndex(
        (elem) => elem.code == delete_code && elem.category == delete_cat,
      );

      console.log(index);

      //removing process
      local.splice(index, 1);

      console.log(local);

      //resorting localstorage array after removing
      //1. changing array to string
      let str = JSON.stringify(local);
      //2. storing str to localstorage
      localStorage.setItem('key', str);
      console.log(localStorage);

      total();

      //hide effect after deleting
      $(this).parent().parent().fadeOut('slow').remove();

      console.log(local.length);

      if (local.length < 1) {
        window.location.reload();
      }

      total_product(local.length);
      block_btn(local_check);
    }
  });

  //remove all
  if (local_check != null) {
    $('.remove_all').click(function () {
      if (
        confirm(
          'Do You Realy want to remove all these items form the basket .... ?',
        ) == true
      ) {
        //hide effect after deleting
        $('tbody > tr').fadeOut('slow').empty();

        localStorage.removeItem('key');

        window.location.reload();
      }
    });
  }

  //function for CHECKOUT
  var hey = '';
  var chceckout = function () {
    let all = document.querySelectorAll('.shopping_cart_table_rows > tr')
      .length;

    let product_name = document.getElementsByClassName('product_name ');

    let shopping_quantity = document.getElementsByClassName(
      'shopping_quantity',
    );

    let single_price = document.getElementsByClassName('single_price ');
    var bag = '';
    for (let a = 0; a < all; a++) {
      var products_names = $(product_name[a]).text();
      var shopping_quantities = $(shopping_quantity[a]).val();
      var multi_price = $(single_price[a]).text();

      bag += `Product No ${a + 1} :-
              Product Name : ${products_names},
              Product Quantity : ${shopping_quantities},
              Product Price : ${multi_price}
                     <------------------ Next Order ----------------->
        `;
    }
    console.log(bag.toString());
    return bag.toString();
  };

  // Click Event
  //.
  //..
  $('#final_checkout').click(function () {
    if (local_check == null) {
      // alert('the cart is empty can not make this process ');
      $.notify('السلة فارغة !!', 'warn', {
        // if autoHide, hide after milliseconds
        autoHideDelay: 3000,
      });
    } else {
      //disable link after request
      $(this).css('pointer-events', 'none');

      setTimeout(
        function () {
          Email.send({
            SecureToken: '11c690b3-7066-4ee8-9ff7-c2e1e0c91e07',
            To: 'mohamedx.28@gmail.com',
            From: 'web.technicalproffessional@gmail.com',
            Subject: 'Multi Orders',
            Body: chceckout(),
          }).then((message) => {
            if (message == 'OK') {
              //enable link after request is done
              $(this).css('pointer-events', 'auto');
              localStorage.clear();
              block_btn(local_check);
              window.location.reload();
              // alert('your cart elements has been send Successfuly ....');
              $.notify('تم', 'success', {
                // if autoHide, hide after milliseconds
                autoHideDelay: 3000,
              });
            }
          });
        }.bind(this),
        200,
      );
    }
  });

  total();

  block_btn(local_check);
});
