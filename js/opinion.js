$(document).ready(function () {
  $('#send_opinion').click(function () {
    $(this).css('pointer-events', 'none');
    $(this).text('Wait ...');
    var text = $('#user_opinion').val();

    if (text.length < 1) {
      // alert('Empty Reply !');
      $.notify('Empty Reply ! ', 'error', {
        // if autoHide, hide after milliseconds
        autoHideDelay: 3000,
      });
    } else {
      Email.send({
        SecureToken: 'df7da04b-a5b2-46c6-b9fc-875ff5e529f3',
        To: 'mohamedx.28@gmail.com',
        From: 'web.technicalproffessional@gmail.com',
        Subject: 'Web Comment',
        Body: `${text}`,
      }).then((message) => {
        if (message == 'OK') {
          //enable link after request is done
          $(this).css('pointer-events', 'auto');
          $('#user_opinion').val('');
          $(this).text('Send');
          $.notify('Done .... ', 'success', {
            // if autoHide, hide after milliseconds
            autoHideDelay: 3000,
          });
          // alert('Done ...');
        } else {
          $.notify('Sending Error  .... ', 'error', {
            // if autoHide, hide after milliseconds
            autoHideDelay: 3000,
          });
          // alert('Sending Error ...');
        }
      });
    }
  });
});
