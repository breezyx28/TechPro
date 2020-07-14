$(document).ready(function () {
  $('#send_opinion').click(function () {
    $(this).css('pointer-events', 'none');
    $(this).text('Wait ...');
    var text = $('#user_opinion').val();

    if (text.length < 1) {
      alert('Empty Reply !');
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
          $(this).text('Send ...');

          alert('Done ...');
        } else {
          alert('Sending Error ...');
        }
      });
    }
  });
});
