$(document).ready(function () {
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
                    class="border pl-4 pr-4 pt-2 pb-2 text-center"
                    style="width: 14vw;background-size:cover;"
                    min="1"
                    value="1"
                /></td>
                <td class="align-middle"><div class="remove bg-danger text-white p-2 text-center" value="${code}">
                    x
                </div></td>
                <td class="align-middle"> <div class="price text-dark text-center">
                    <b>$${price}</b></td>
            </tr>`;
    $('.shopping_cart_table_rows').append(tr);
  };

  //   external file
  $.getJSON('../json/category.json', function (data) {
    var local_array = JSON.parse(localStorage.getItem('key'));

    function compare(data1) {
      $.each(data1, function (index1, value1) {
        $.each(local_array, function (index2, value2) {
          if (value1.clothes[value2.code] && value2.category == 'clothes') {
            let a = value1.clothes[value2.code];
            tr(value2.category, a.image_url, a.name, a.price, value2.code);
            console.log(value1.clothes[value2.code]);
          }
          if (value1.Furniture[value2.code] && value2.category == 'Furniture') {
            let a = value1.Furniture[value2.code];
            tr(value2.category, a.image_url, a.name, a.price, value2.code);
            console.log(value1.Furniture[value2.code]);
          }
          if (value1.food[value2.code] && value2.category == 'food') {
            let a = value1.food[value2.code];
            tr(value2.category, a.image_url, a.name, a.price, value2.code);
            console.log(value1.food[value2.code]);
          }
          if (
            value1.Electronics[value2.code] &&
            value2.category == 'Electronics'
          ) {
            let a = value1.Electronics[value2.code];
            tr(value2.category, a.image_url, a.name, a.price, value2.code);
            console.log(value1.Electronics[value2.code]);
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
});
