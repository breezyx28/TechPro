$(document).ready(function () {
  var pos = 0,
    c = 0;
  var slider = {
    1: {
      top_header: 'Our Services',
      title: 'Import & Export',
      description: 'All the products we provide are orignal',
      image: 'img/photo-1576731753569-3e93a228048c.jpg',
      position: 1,
      active: true,
    },
    2: {
      top_header: 'Our Services',
      title: 'Customs Clearance',
      description: 'It includes packaging, loading and shipping procedures',
      image: 'img/fotografierende-xqC7hdLMpgk-unsplash.jpg',
      position: 2,
      active: false,
    },
    3: {
      top_header: 'Our Services',
      title: 'Control of Goods',
      description: 'In cases of dealing with Chinese factories and companies',
      image: 'img/zsofia-vera-mezei-6AQKMF5jbYc-unsplash.jpg',
      position: 3,
      active: false,
    },
    4: {
      top_header: 'Our Services',
      title: 'Commercial flights to China',
      description: 'Arranging and preparing commercial trips to popular China',
      image: 'img/zsofia-vera-mezei-6AQKMF5jbYc-unsplash.jpg',
      position: 4,
      active: false,
    },
  };

  var msgs = {
    1: {
      1: `<div id="msg_1" class="header" style="overflow-y: auto;">
      <div class="mb-2">
      <img src="img/icons/import.png" width="50" height="50" >
      </div>
      <p class="text-dark">
      Importing the original aspirates for Toyota, Nissan, Mitsubishi and Isuzu from Thailand.
      </p>
    </div> `,
    },
    2: {
      2: `<div id="msg_2" class="header" style="overflow-y: auto;">
      <div class="mb-2">
      <img src="img/icons/delivery-box.png" width="50" height="50">
      </div>
        <p class="text-dark">
        Import all the needs of customers from China and the Kingdom of Thailand and do all the
         procedures of packaging, loading, shipping and customs clearance and deliver them to
          the customer’s headquarters, according to the conditions, standards and standards
           determined by the customer in advance and at competitive prices (China and Thailand prices),
            through offers Pricing offered to the customer in advance at his request.
        </p>
      </div>`,
    },
    3: {
      3: `<div id="msg_3" class="header" style="overflow-y: auto;">
      <div class="mb-2">
      <img src="img/icons/assurance.png" width="50" height="50">
      </div>
      <p class="text-dark">
      In cases in which companies or individuals deal with Chinese factories and companies, our company
       provides a service to control all the goods that are supplied to the customer by doing its examination
        and ensuring that they comply with all conditions and standards agreed between the exporter and the importer,
         and this service includes Receiving and transporting goods from factories, clearing them,
          shipping them and delivering them to where the customer desires in all parts of Sudan.
      </p>
    </div>`,
    },
    4: {
      4: `<div id="msg_3" class="header" style="overflow-y: auto;">
      <div class="mb-2">
      <img src="img/icons/plane-tickets.png" width="50" height="50">
      </div>
      <p class="text-dark">
      Organizing and arranging commercial trips to the People's Republic of China, and this service includes flight reservations,
       hotels and reception at the airport and providing transportation for cities and factories with the
        provision of translators with high experience and credibility, confidence and honesty, in addition to providing warehouses for goods in China And Sudan.
      </p>
    </div>`,
    },
  };

  function reset() {
    // set the default state of screen
    document.querySelector('.srv_top_head_desc').innerHTML =
      slider[1]['top_header'];
    document.querySelector('.srv_head_title').innerHTML = slider[1]['title'];
    document.querySelector('.srv_bttom_desc').innerHTML =
      slider[1]['description'];
    document.querySelector('.srv_slide_middle_msg').innerHTML = msgs[1][1];
  }

  reset();

  $('#next_page').click(function () {
    for (var i = 1; i <= 4; i++) {
      if (slider[i].active == true) {
        c = slider[i].position;
        console.log(c);
      }
    }
    console.log(slider);

    console.log(c);

    //slider position now
    var now_pos = c;
    // console.log(now_pos);
    var after_pos = now_pos + 1;
    if (slider[after_pos]) {
      var next_pos = slider[after_pos].position;
      console.log('nex_pos :', next_pos);

      slider[now_pos].active = false;
      slider[next_pos].active = true;
      console.log(
        'c :',
        c,
        'now position :',
        now_pos,
        'next position :',
        next_pos,
      );

      var now = slider[next_pos];

      var x = 0;
      var y = 0;
      var z = 0;

      var img = $('.srv_side2 > img');
      var msg = $('.srv_slide_middle_msg');

      img.fadeOut('fast', function () {
        // console.log(value.image);

        img.attr('src', now.image);
        img.fadeIn('fast');
      });

      msg.empty().append(msgs[next_pos][next_pos]);

      function typeing() {
        $('.srv_slide_middle_msg').addClass('swip_slider');

        if (x < now.top_header.length) {
          document.querySelector(
            '.srv_top_head_desc',
          ).innerHTML += now.top_header.charAt(x);
          x++;
          setTimeout(typeing, 50);
        }
        if (y < now.title.length) {
          document.querySelector(
            '.srv_head_title',
          ).innerHTML += now.title.charAt(y);
          y++;
          setTimeout(typeing, 5000);
        }
        if (z < now.description.length) {
          document.querySelector(
            '.srv_bttom_desc',
          ).innerHTML += now.description.charAt(z);
          z++;
          setTimeout(typeing, 500);
        }
      }

      // empty html text
      document.querySelector('.srv_top_head_desc').innerHTML = '';
      document.querySelector('.srv_head_title').innerHTML = '';
      document.querySelector('.srv_bttom_desc').innerHTML = '';

      typeing();
      $('.srv_slide_middle_msg').removeClass('swip_slider');
    }
  });

  $('#previous_page').click(function () {
    for (var i = 1; i <= 4; i++) {
      if (slider[i].active == true) {
        c = slider[i].position;
        console.log(c);
      }
    }
    console.log(slider);

    console.log(c);

    //slider position now
    var now_pos = c;

    var before_pos = now_pos - 1;
    if (slider[before_pos]) {
      var prev_pos = slider[before_pos].position;
      console.log('previous position :', prev_pos);

      slider[now_pos].active = false;
      slider[prev_pos].active = true;
      console.log(
        'c :',
        c,
        'now position :',
        now_pos,
        'prev position :',
        prev_pos,
      );

      var now = slider[prev_pos];

      var x = 0;
      var y = 0;
      var z = 0;

      var img = $('.srv_side2 > img');
      var msg = $('.srv_slide_middle_msg');

      img.fadeOut('fast', function () {
        // console.log(value.image);

        img.attr('src', now.image);
        img.fadeIn('fast');
      });

      msg.empty().append(msgs[prev_pos][prev_pos]);

      function typeing() {
        $('.srv_slide_middle_msg').addClass('swip_slider');

        if (x < now.top_header.length) {
          document.querySelector(
            '.srv_top_head_desc',
          ).innerHTML += now.top_header.charAt(x);
          x++;
          setTimeout(typeing, 50);
        }
        if (y < now.title.length) {
          document.querySelector(
            '.srv_head_title',
          ).innerHTML += now.title.charAt(y);
          y++;
          setTimeout(typeing, 5000);
        }
        if (z < now.description.length) {
          document.querySelector(
            '.srv_bttom_desc',
          ).innerHTML += now.description.charAt(z);
          z++;
          setTimeout(typeing, 500);
        }
      }

      // empty html text
      document.querySelector('.srv_top_head_desc').innerHTML = '';
      document.querySelector('.srv_head_title').innerHTML = '';
      document.querySelector('.srv_bttom_desc').innerHTML = '';

      typeing();
      $('.srv_slide_middle_msg').removeClass('swip_slider');
    }
  });
});
