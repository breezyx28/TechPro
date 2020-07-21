$(document).ready(function () {
  $('#send_opinion').click(function () {
    $(this).css('pointer-events', 'none');
    $(this).text('إنتظر ...');
    var text = $('#user_opinion').val();

    if (text.length < 1) {
      // alert('الرد فارغ الرجاء الكتابة ثم الإرسال');
      $.notify('الرد فارغ الرجاء الكتابة ثم الإرسال', 'warn', {
        // if autoHide, hide after milliseconds
        autoHideDelay: 3000,
      });
    } else {
      Email.send({
        SecureToken: '11c690b3-7066-4ee8-9ff7-c2e1e0c91e07',
        To: 'mohamedx.28@gmail.com',
        From: 'web.technicalproffessional@gmail.com',
        Subject: 'Web Comment',
        Body: `${text}`,
      }).then((message) => {
        if (message == 'OK') {
          //enable link after request is done
          $(this).css('pointer-events', 'auto');
          $('#user_opinion').val('');
          $(this).text('إرسال');

          // alert('تم ....');
          $.notify('تم .... ', 'success', {
            // if autoHide, hide after milliseconds
            autoHideDelay: 3000,
          });
        } else {
          // alert('حدث خطأ في الإرسال ....');
          $.notify('حدث خطأ في الإرسال ', 'error', {
            // if autoHide, hide after milliseconds
            autoHideDelay: 3000,
          });
        }
      });
    }
  });
});
