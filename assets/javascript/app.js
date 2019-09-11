 //set time in sec
 var number = 15;
   
 //  Variable that will hold our interval ID when we execute
 //  the "run" function
 var intervalId;

 // Variable that will hold the right answers
 var right = 0;

 //onclick function  question 1
   $(".question1").on("click", function() {
  // alert("I've been clicked!");
  var questionValue = $(this).val();
  console.log(questionValue);
  if ($(this).attr("data-answer") === "correct1") {
      right++;
      $(".incorrect1").empty();
      $(this).attr("data-answer","counted");
      $('.question1').prop("disabled", true); 
      $("#correct-answer1").text("This is the right answer! 1 point for you!");

      console.log(right)
  } else {
      $(".incorrect1").empty();
      $("#brazil").remove();
      $(this).attr("data-answer","counted");
      $("#correct-answer1").text("Wrong! no points for you! the right answer is:");

  }
});

   //onclick function  question 2
   $(".question2").on("click", function() {
  // alert("I've been clicked!");
  var questionValue = $(this).val();
  console.log(questionValue);
  if ($(this).attr("data-answer") === "correct2") {
      right++;
      $(".incorrect2").empty();
      $(this).attr("data-answer","counted");
      $('.question2').prop("disabled", true); 
      $("#correct-answer2").text("This is the right answer! 1 point for you!");

      console.log(right)
  } else {
      $(".incorrect2").empty();
      $("#liverpool").remove();
      $(this).attr("data-answer","counted");
      $("#correct-answer2").text("Wrong! no points for you! the right answer is:");

  }
});

   //onclick function  question 1
   $(".question3").on("click", function() {
  // alert("I've been clicked!");
  var questionValue = $(this).val();
  console.log(questionValue);
  if ($(this).attr("data-answer") === "correct3") {
      right++;
      $(".incorrect3").empty();
      $(this).attr("data-answer","counted");
      $('.question3').prop("disabled", true); 
      $("#correct-answer3").text("This is the right answer! 1 point for you!");

      console.log(right)
  } else {
      $(".incorrect3").empty();
      $("#russia").remove();
      $(this).attr("data-answer","counted");
      $("#correct-answer3").text("Wrong! no points for you! the right answer is:");

  }
});

  //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
 function run() {
   clearInterval(intervalId);
   intervalId = setInterval(decrement, 1000);
 }

 //  The decrement function.
 function decrement() {

   //  Decrease number by one.
   number--;

   //  show time left in card footer
   $("#show-number").html("<h2>" + number + "</h2>");
   // show score in card footer
   $("#right").html("<h2>" + right + "</h2>");

   //  Once number hits zero...
   if (number === 0) {
      $('.question1').prop("disabled", true); 
      $('.question2').prop("disabled", true); 
      $('.question3').prop("disabled", true); 


     //  ...run the stop function.
     stop();
      

     //  Alert the user that time is up.
     alert("Time Up!");
     
   }
 }

 //  The stop function
 function stop() {

//  Clears our intervalId
//  We just pass the name of the interval
//  to the clearInterval function.
clearInterval(intervalId);
}


 //  Execute the run function.
 run(); 

