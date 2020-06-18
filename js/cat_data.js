$(document).ready(function () {
  var currentlocation = window.location.href;
  var url = new URL(currentlocation);
  var url_params = url.searchParams.get('category');

  var items = [],
    categ = '',
    elec = '',
    furn = '',
    food = '';
  //get JSON from External file
  $.getJSON('../json/category.json', function (data) {
    $.each(data, function (index, value) {
      // console.log('data :', data);

      items.push(data);
      categ = value.clothes.length;
      elec = value.Electronics.length;
      furn = value.Furniture.length;
      food = value.food.length;
      // console.log(value);
    });
  });

  //loading spinner function
  function loader() {
    setTimeout(function () {
      $('.load_more').addClass('.loader');
    }, 1500);
    $('.load_more').removeClass('.loader');
  }

  var content = function (code, cat, img, name, price, stars) {
    // console.log(img, name, price, stars);
    let star = `<i class="fa fa-star text-warning" aria-hidden="true"></i>`;
    let con = `<div class="col-lg-4 col-md-4 col-sm-6 pt-4">
  <div
    class="cat_product_price_image_holder position-relative bg-white rounded shadow-sm d-flex flex-column justify-content-between h-100 pt-3 p-3"
  >
    <div
      class="upper_holder d-flex flex-row justify-content-between"
    >
      <small class="cat_product_image_badge bg-light text-muted"
        >NEW</small
      >
      <div
        class="cat_product_image_icons d-flex justify-content-between text-muted"
      >
        <i class="fa fa-list-ul mr-2" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
      </div>
    </div>
    <div
      class="image_stock d-flex justify-content-center h-100 p-2"
    >
      <img
        src="${img}"
        style="object-fit: contain; width: 100%; height: 100%;"
        alt=""
      />
    </div>
    <div class="text-center">
      <p class="text-dark product_name"><b>${name}</b></p>
    </div>
    <div
      class="d-flex flex-lg-row flex-md-row justify-content-between justify-content-sm-center align-items-center align-items-sm-center flex-sm-column flex-md-column"
    >
      <div
        class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex flex-row justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center"
      >
      ${star.repeat(stars)}
        
      </div>
      <div
        class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex flex-row justify-content-lg-end justify-content-md-center align-items-sm-center justify-content-sm-center justify-content-end"
      >
        <div
          class="btn-group"
          role="group"
          aria-label="Price + Cart"
        >
          
            <a href="cart.html?category=${cat}&code=${code}" class="btn btn-outline-secondary btn-sm" style="text-decoration:none;"><b>$${price}</b></a>
         
          <button
            class="cart_btn btn btn-outline-secondary btn-sm text-center" value="${code}"
          >
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`;
    $('#category_contents').append(con);
  };

  function category(cat, i) {
    let item = [];
    setTimeout(function () {
      $.each(items, function (index, value) {
        if (cat == 'clothes') {
          item = value.category.clothes[i];
          content(i, cat, item.image_url, item.name, item.price, item.rate);
        }
        if (cat == 'food') {
          item = value.category.food[i];
          content(i, cat, item.image_url, item.name, item.price, item.rate);
        }
        if (cat == 'furniture') {
          item = value.category.Furniture[i];
          content(i, cat, item.image_url, item.name, item.price, item.rate);
        }
        if (cat == 'Electronics') {
          item = value.category.Electronics[i];
          content(i, cat, item.image_url, item.name, item.price, item.rate);
        }
      });
    }, 1000);
  }

  //view first 6 elemenets
  function view6(type) {
    for (let z = 0; z < 6; z++) {
      category(type, z);
    }
  }
  function loading_ring() {
    setTimeout(function () {
      $('.load_more').removeClass('contents_load');
    }, 1600);
    $('.load_more').addClass('contents_load');
  }

  var i = 6,
    w = 0,
    v = 0;
  switch (url_params) {
    case 'clothes':
      view6('clothes');
      $('.load_more').click(function () {
        loading_ring();
        w = w + 6;
        v++;
        let k = i * v + 6;
        for (let c = w; c <= k - 1; c++) {
          if (c <= categ - 1) {
            category('clothes', c);
          }
        }
      });
      break;
    case 'furniture':
      view6('furniture');
      $('.load_more').click(function () {
        loading_ring();
        w = w + 6;
        v++;
        k = i * v + 6;
        for (var c = w; c <= k - 1; c++) {
          if (c <= furn - 1) {
            category('furniture', c);
          }
        }
      });
      break;
    case 'Electronics':
      i = 6;
      view6('Electronics');
      w = 0;
      v = 0;
      $('.load_more').click(function () {
        loading_ring();
        w = w + 6;
        v++;
        k = i * v + 6;
        for (var c = w; c <= k - 1; c++) {
          if (c <= elec - 1) {
            category('Electronics', c);
          }
        }
      });
      break;
    case 'food':
      i = 6;
      view6('food');
      w = 0;
      v = 0;
      $('.load_more').click(function () {
        loading_ring();
        w = w + 6;
        v++;
        k = i * v + 6;
        for (var c = w; c <= k - 1; c++) {
          if (c <= food - 1) {
            category('food', c);
          }
        }
      });

      break;
    default:
      break;
  }

  // cart section
  var cart_array = [];
  var local_array = '';

  $(document).on('click', '.cart_btn', function () {
    var code = $(this).val();
    var cart_object = {
      code: '',
      category: '',
    };
    cart_object.code = code;
    cart_object.category = url_params;

    // var exist = cart_array.find((elem) => elem.code == code);
    var length_storage = localStorage.length;
    console.log(localStorage);

    if (length_storage < 1) {
      cart_array.push(cart_object);
      localStorage.setItem('key', JSON.stringify(cart_array));
      let data = JSON.parse(localStorage.getItem('key'));
      $('.cart_number').text(data.length);
    } else {
      let test_data = JSON.parse(localStorage.getItem('key'));
      let local_exists = test_data.find((elem) => elem.code == code);

      console.log('test_data :', test_data, 'local_exists :', local_exists);
      if (local_exists) {
        console.log('local_exists : ', local_exists);

        alert('exists');
      } else {
        console.log('cart_array :', cart_array);

        local_array = JSON.parse(localStorage.getItem('key'));

        local_array.push(cart_object);
        localStorage.setItem('key', JSON.stringify(local_array));
        let data = JSON.parse(localStorage.getItem('key'));
        $('.cart_number').text(data.length);
      }
    }

    // if (exist) {
    //   alert('exists');
    // } else {
    //   cart_array.push(cart_object);
    //   localStorage.setItem('key', JSON.stringify(cart_array));
    // }

    console.log(localStorage);
    // localStorage.clear();
  });
  let data = JSON.parse(localStorage.getItem('key'));
  // console.log('localStorage Length', JSON.parse(data.length));
  $('.cart_number').text(data.length);
  console.log();
});
