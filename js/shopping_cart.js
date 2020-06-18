$(document).ready(function () {
  var tr = function (img, name, price, code) {
    let tr = `<tr class="bg-white border-bottom">
                <td class="align-middle d-flex flex-row align-items-center ml-2">
                <img
                    src="${img}"
                    width="80"
                    height="80"
                    class="product_img"
                    alt=""
                />
                <p class="product_name ml-3">${name}</p>
                </td>
                <td class="align-middle text-center"><input
                    type="number"
                    name="quantity"
                    id="shopping_quantity"
                    class="border pl-4 pr-4 pt-2 pb-2 text-center"
                    style="width: 14vw;"
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
    var leng = local_array.length;

    // var clothes = data.category.clothes,
    //   Furniture = data.category.Furniture,
    //   food = data.category.food,
    //   Electronics = data.category.Electronics;

    function compare(data1, category) {
      $.each(data1, function (index1, value1) {
        console.log(value1);

        $.each(local_array, function (index2, value2) {
          if (value1.clothes[value2.code] && category == 'clothes') {
            let a = value1.clothes[value2.code];
            tr(a.image_url, a.name, a.price, value2.code);
            console.log(value1.clothes[value2.code]);
          }
          if (value1.Furniture[value2.code] && category == 'Furniture') {
            let a = value1.Furniture[value2.code];
            tr(a.image_url, a.name, a.price.value2.code);
            console.log(value1.Furniture[value2.code]);
          }
          if (value1.food[value2.code] && category == 'food') {
            let a = value1.food[value2.code];
            tr(a.image_url, a.name, a.price.value2.code);
            console.log(value1.food[value2.code]);
          }
          if (value1.Electronics[value2.code] && category == 'Electronics') {
            let a = value1.Electronics[value2.code];
            tr(a.image_url, a.name, a.price.value2.code);
            console.log(value1.Electronics[value2.code]);
          }
        });
      });
    }

    compare(data, 'clothes');
    if (local_array['clothes']) {
      compare(data, 'clothes');
    }
    if (local_array['Furniture']) {
      compare(data, 'Furniture');
    }
    if (local_array['food']) {
      compare(data, 'food');
    }
    if (local_array['Electronics']) {
      compare(data, 'Electronics');
    }

    // console.log(local_array);
  });
});
