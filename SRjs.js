
//Code for toggling
$("#toggle-chart").click(function() {
    $(".chart").toggle();
  });
  
//Display the localStorage of the first 5 cases  
$('#case1').text(localStorage.case1Title);
$('#case2').text(localStorage.case2Title);
$('#case3').text(localStorage.case3Title);
$('#case4').text(localStorage.case4Title);
$('#case5').text(localStorage.case5Title);
$('#case1KeyLoc').text(localStorage.case1KeyLoc);
$('#case2KeyLoc').text(localStorage.case2KeyLoc);
$('#case3KeyLoc').text(localStorage.case3KeyLoc);
$('#case4KeyLoc').text(localStorage.case4KeyLoc);
$('#case5KeyLoc').text(localStorage.case5KeyLoc);
$('#score1').text(localStorage.case1Score);
$('#score2').text(localStorage.case2Score);
$('#score3').text(localStorage.case3Score);
$('#score4').text(localStorage.case4Score);
$('#score5').text(localStorage.case5Score);
console.log(localStorage.case5Score)
//If click shift review, clear local localStorage
$("#new-shift").click(function() {
  console.log('starting new shift, clearing storage');
    localStorage.clear();
    

  });
  console.log(localStorage.minutes, localStorage.seconds);