$(document).ready(() => {
  var session = 300;
  var sessionTime = 5;
  var break1 = 300;
  var breakSession = 5;
  var buzzer = $('#buzzer')[0];

  // Session Length Logic

  $('#time').html(session);
  $('#increaseSession').click(() => {
    session = session + 60;
    $('#time').html(session);
    sessionTime = sessionTime + 1;
    $('#increaseSession1').html(sessionTime);
  });

  $('#decreaseSession').click(() => {
    if (session > 0) {
      session = session - 60;
      $('#time').html(session);
      sessionTime = sessionTime - 1;
      $('#increaseSession1').html(sessionTime);
    }
  });

  //Break Length Logic

  $('#increaseBreak').click(() => {
    break1 = break1 + 60;
    $('#break').html(breakSession);
    breakSession = breakSession + 1;
    $('#break').html(breakSession);
  });

  $('#decreaseBreak').click(() => {
    if (break1 > 0) {
      break1 = break1 - 60;
      breakSession = breakSession - 1;
      $('#break').html(breakSession);
    }
  });

  //Countdown Timer Logic

  $('#start').click(() => {
    if (session > 0) {
      $(
        '#decreaseSession, #increaseSession, #start, #increaseBreak, #decreaseBreak, #title1, #title2, .min, #break, #increaseSession1'
      ).hide();
      var counter = setInterval(() => {
        session -= 1;
        $('#time').html(session);
        if (session === 0) {
          buzzer.play();
          clearInterval(counter);
        }
      }, 1000);
    }
  });
});
