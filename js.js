$(document).ready(() => {
  var session = 300;
  var sessionTime = 5;
  var break1 = 300;
  var breakSession = 5;
  var buzzer = $('#buzzer')[0];

  // Session Length Logic

  // $('#time').html(session);
  $('#increaseSession').click(() => {
    session = session + 60;
    sessionTime = sessionTime + 1;
    $('#increaseSession1').html(sessionTime);
  });

  $('#decreaseSession').click(() => {
    if (session > 0) {
      session = session - 60;
      sessionTime = sessionTime - 1;
      $('#increaseSession1').html(sessionTime);
    }
  });

  // //Break Length Logic

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
    var counter = setInterval(timer, 1000);
    function timer() {
      $(
        '#decreaseSession, #increaseSession, #start, #increaseBreak, #decreaseBreak, #title1, #title2, .min, #break, #increaseSession1'
      ).hide();
      $('#timeType').html('Session Time:');
      $('#time').html(session);
      session -= 1;

      if (session === 0) {
        buzzer.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
      }

      if (session % 60 >= 10) {
        $('#time').html(Math.floor(session / 60) + ':' + session % 60);
      } else {
        $('#time').html(Math.floor(session / 60) + ':' + '0' + session % 60);
      }
      function breakTimer() {
        $('#timeType').html('Break Time:');
        $('#time').html(break1);
        break1 -= 1;
        if (break1 === 0) {
          clearInterval(startBreak);
          $('#reset').show();
          buzzer.play();
        }
        if (break1 % 60 >= 10) {
          $('#time').html(Math.floor(break1 / 60) + ':' + break1 % 60);
        } else {
          $('#time').html(Math.floor(break1 / 60) + ':' + '0' + break1 % 60);
        }
      }
    }
  });

  // Reset Button Logic

  $('#reset').click(() => {
    session = 300;
    break1 = 300;
    $('#break').html(break1);
    $(
      '#decreaseSession, #increaseSession, #start, #increaseBreak, #decreaseBreak, #title1, #title2, .min, #break, #increaseSession1'
    ).show();
    $('#reset, #timeType').hide();
  });
});
