$(document).ready(function () {
  var pos = 0,
    c = 0;
  var slider = {
    1: {
      top_header: 'خدماتنا هي ',
      title: 'الإستيراد و التصدير',
      description: 'جميع المنتجات التي نقوم بإستيرادها اصلية ',
      msg: 'lorem ipsum dol .',
      image: '../../img/photo-1576731753569-3e93a228048c.jpg',
      position: 1,
      active: true,
    },
    2: {
      top_header: 'خدماتنا هي ',
      title: 'التخليص الجمركي',
      description: 'يشمل اجراءات التغليف و التحميل و الشحن',
      image: '../../img/fotografierende-xqC7hdLMpgk-unsplash.jpg',
      position: 2,
      active: false,
    },
    3: {
      top_header: 'خدماتنا هي',
      title: 'الرقابة على البضائع',
      description: 'في حالات التعامل مع المصانع و الشركات الصينية',
      image: '../../img/zsofia-vera-mezei-6AQKMF5jbYc-unsplash.jpg',
      position: 3,
      active: false,
    },
    4: {
      top_header: 'خدماتنا هي',
      title: 'رحلات تجارية إلى جمهورية الصين',
      description: 'ترتيب و تجهيز الرحلات التجارية إلى الصين الشعبية',
      image: '../../img/zsofia-vera-mezei-6AQKMF5jbYc-unsplash.jpg',
      position: 4,
      active: false,
    },
  };

  var msgs = {
    1: {
      1: `<div id="msg_1" class="header p-3" style="overflow-y: auto;float:right;direction:rtl;">
      <div class="float-right mb-2">
      <img src="../../img/icons/import.png" width="50" height="50" >
      </div>
      <br>
      <br>
      <div class="text-dark text-center float-right mt-0" style="direction:rtl;">
      استيراد الاسبيرات الأصلية للتويوتا و النيسان و الميتسوبيشي و الآيسوزو من تايلاند
      </div>
    </div> `,
    },
    2: {
      2: `<div id="msg_2" class="header p-3" style="overflow-y: auto;float:right;direction:rtl;">
        <div class="float-right mb-2">
        <img src="../../img/icons/delivery-box.png" width="50" height="50">
        </div>
        <p class="text-dark text-center float-right mt-0" style="direction:rtl;">
         استيراد جميع احتياجات العملاء من الصين و مملكة تايلند و القيام بحميع اجراءات التغليف و التحميل و الشحن و التخليص الجمركي و إيصالها الى مقر العميل 
         , ووفق الشروط و المعايير و المقاييس التي يحددها العميل مسبقا و بأسعار تنافسية ( اسعار الصين وتايلاند )
         , وذلك من خلال عروض الأسعار التي تقدم للعميل بشكل مسبق بناء على طلبه .
        </p>
      </div>`,
    },
    3: {
      3: `<div id="msg_3" class="header" style="overflow-y: auto;float:right;direction:rtl;">
      <div class="float-right mb-2">
      <img src="../../img/icons/assurance.png" width="50" height="50">
      </div>
      <p class="text-dark text-center float-right mt-0" style="direction:rtl;">
      في الحالات التي تقوم بها الشركات او الأفراد بالتعامل مع المصانع و الشركات الصينية , تقدم شركتنا خدمة الرقابة على جميع البضائع التي يتم توريدها للعميل وذلك من خلال القيام بفحصها و التأكد من مطابقتها لجميع الشروط و المعايير المتفق عليها
      بين المصدر و المستورد ,
      و تشمل هذه الخدمة استلام  و نقل البضائع من المصانع و تخليصها و شحنها و إيصالها إلى حيث يرغب العميل في كافة انحاء السودان .
      </p>
    </div>`,
    },
    4: {
      4: `<div id="msg_4" class="header" style="overflow-y: auto;float:right;direction:rtl;">
      <div class="float-right mb-2">
      <img src="../../img/icons/plane-tickets.png" width="50" height="50">
      </div>
      <p class="text-dark text-center float-right mt-0" style="direction:rtl;">
      تنظيم و ترتيب رحلات تجارية إلى جمهورية الصين الشعبية , و تشمل
      هذه الخدمة حجوزات الطيران  و الفنادق  و الإستقبال في المطار و توفير وسائل النقل  للمدن و المصانع مع توفير مترجمين ذوو خبرات عالية و يتحلون بالمصداقية و الثقة و الامانة ,
      بالإضافة إلى توفير مستودعات للبضائع في الصين و السودان .
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
