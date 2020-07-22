$(document).ready(function () {
  var currentlocation = window.location.href;
  var url = new URL(currentlocation);
  var url_params = url.searchParams.get('category');

  var items = [];

  function category_check(c = url_params) {
    if (c == 'clothes') {
      return items[0].category.clothes;
    }
    if (c == 'spares') {
      return items[0].category.spares;
    }
    if (c == 'furniture') {
      return items[0].category.Furniture;
    }
    if (c == 'Electronics') {
      return items[0].category.Electronics;
    }
  }
  //   category_check
  //get JSON from External file
  $.getJSON('../json/category.json', function (data) {
    $.each(data, function (index, value) {
      // console.log('data :', data);

      items.push(data);
    });
  });

  var contents = function (code, cat, img, name, price, stars) {
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
        <i class="product_info fa fa-exclamation-circle mr-2" aria-hidden="true" style="cursor:pointer;"></i>
        <i class="like_btn fa fa-heart" hash="${code}-${cat}" aria-hidden="true"></i>
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
          
            <a href="#" class="btn btn-outline-secondary btn-sm" style="text-decoration:none;"><b>$${price}</b></a>
         
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

  $('#search').on('keyup', function () {
    var search = this.value;
    var option = $('#search_dropdown').val();

    if (option == 'tag') {
      if (search != '') {
        $('#category_contents').empty();
        $('.load_more').hide('fast');
        $.each(category_check(), function (index, value) {
          if ($.inArray(search, value.key_word) != -1) {
            console.log(value);

            contents(
              index,
              url_params,
              value.image_url,
              value.name,
              value.price,
              value.rate,
            );
          }
        });
      } else {
        window.location.reload();
      }
    } else if (option == 'title') {
      if (search != '') {
        $('#category_contents').empty();
        $('.load_more').hide('fast');
        $.each(category_check(), function (index, value) {
          if (value.name.search(search) != -1) {
            console.log(value);

            contents(
              index,
              url_params,
              value.image_url,
              value.name,
              value.price,
              value.rate,
            );
          }
        });
      } else {
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
  });
});
