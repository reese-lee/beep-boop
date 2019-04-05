//business logic
var beepOne = "Beep!"
var beepTwo = "Boop!"
var beepThree = "I'm sorry, Dave. I'm afraid I can't do that."


function beepBoop(number) {
  var beepBoopArray = [];
  var numberInput = parseInt($("#integer-input").val());
  for (var i = 0; i < 100; i++) {
    if (numberInput === 1) {
      return beepOne;
    } else if (numberInput === 2) {
      return beepTwo;
    } else if (numberInput === 3) {
        return beepThree;
    } else {
        return "Just kidding, Jenkins"
    }
  }
    beepBoopArray.push();
  };





//user interface logic
$(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#integer-input").val());
    var result = beepBoop(numberInput);
    $("#result").show(result);
    $(".beepBoopNumber").text(result);
  });
});
