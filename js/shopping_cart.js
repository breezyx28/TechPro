$(document).ready(function () {
  var total_product = function (total) {
    $('#total_product').text(total);
  };
  var tr = function (cat, img, name, price, code) {
    let tr = `<tr class="bg-white border-bottom">
                <td class="align-middle d-flex flex-row align-items-center">
                <a href="cart.html?category=${cat}&code=${code}" style="text-decoration:none">
                <img
                    src="${img}"
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
                    <b class="single_price">${price}</b></td>
            </tr>`;
    $('.shopping_cart_table_rows').append(tr);
  };

  //   external file
  $.getJSON('../json/category.json', function (data) {
    var local_array = JSON.parse(localStorage.getItem('key'));

    total_product(local_array.length);

    function compare(data1) {
      $.each(data1, function (index1, value1) {
        $.each(local_array, function (index2, value2) {
          if (value1.clothes[value2.code] && value2.category == 'clothes') {
            let a = value1.clothes[value2.code];
            tr(value2.category, a.image_url, a.name, a.price, value2.code);
          }
          if (value1.Furniture[value2.code] && value2.category == 'Furniture') {
            let a = value1.Furniture[value2.code];
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
        '<tr class="text-center"><td colspan="4">No Data</td></tr>',
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
    }, 100);
  };

  //changing quantity onchange ..........
  $(document).on('change', '.shopping_quantity', function () {
    var val = $(this).val();
    var par = $(this).parent().parent();
    console.log(par);
    var single_price = $(par[0])
      .map(function () {
        return $('td > .price > .single_price', this).text();
      })
      .toArray();

    var d = $(par[0]).map(function () {
      return $('td > .price > .single_price', this).text(
        '$' + val * parseInt(single_price[0]),
      );
    });

    console.log(single_price);

    console.log(par[0]);

    console.log(single_price);

    // $('' + par[0] + '> tr > .price .price_single').text(
    //   val * parseInt(single_price),
    // );
    total();
  });
  total();

  //removing elemenet from cart
  $(document).on('click', '.remove ', function () {
    var delete_code = $(this).attr('value1'),
      delete_cat = $(this).attr('value2'),
      local = JSON.parse(localStorage.getItem('key'));

    console.log(local);

    if (
      confirm('Do You Realy want to remove this item form the basket >') == true
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

      //hide effect after deleting
      $(this).parent().parent().hide('slow');

      console.log(local.length);

      if (local.length < 1) {
        window.location.reload();
      }

      total_product(local.length);
    }
  });
});
