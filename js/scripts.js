//business logic
var beepOne = "Beep!"
var beepTwo = "Boop!"
var beepThree = "I'm sorry, Dave. I'm afraid I can't do that."


function beepBoop(number) {
  var beepBoopArray = "";

  for (var i = 0; i < 100; i++) {
    var
    beepBoopArray.push();
  }
}


//user interface logic
$(function() {
  $(form#converter).submit(function(e) {
    event.preventDefault();
    var numberInput = parseInt("#integer-input").val());
    var result = beepBoop(numberInput);
    $("#result").show(result);
    $(".beepBoopNumber").text(result);
  });
});
