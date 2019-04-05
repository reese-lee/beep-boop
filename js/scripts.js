//business logic
var beepOne = "Beep!"
var beepTwo = "Boop!"
var beepThree = "I'm sorry, Dave. I'm afraid I can't do that."


//to take user input and make it into an array starting from 0 and ending at the input number
function beepBoopArray(numberInput) {
  var beepBoop = [];
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (var i = 0; i <= numberInput; i++) {
    if(!i.toString().includes(i)) {
      beepBoop.push("You are making a wrong boop.");
    } else if (i.toString().includes("3")) {
      beepBoop.push(beepThree);
    } else if (i.toString().includes("2")) {
      beepBoop.push(beepTwo);
    } else if (i.toString().includes("1")) {
      beepBoop.push(beepOne);
    } else {
      beepBoop.push(i);
    }
  } return beepBoop;
};





//user interface logic
$(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    // var beepBoopArray = [];
    var numberInput = parseInt($("#integer-input").val());
    var result = beepBoopArray(numberInput);
    $("#result").fadeIn("slow");
    $(result).append("<li>" + beepBoop[i] + "</li>");
    $(".beepBoopNumber").text(result)
  });
});

//original code to test input and output field
// if (numberInput === 1) {
//   return beepOne;
// } else if (numberInput === 2) {
//   return beepTwo;
// } else if (numberInput === 3) {
//     return beepThree;
// } else {
//     return "Just kidding, Jenkins"
// }
