//display case title & Key Image
document.getElementById("diagnosis").innerText = localStorage.case3Title;
document.getElementById("keyImage").src = ("http://drive.google.com/uc?export=view&id=" + localStorage.case3KeyImg);

var time_score = -1*( parseInt(localStorage.minutes)*60 + parseInt(localStorage.seconds));
console.log(time_score);
//Show Result
if (localStorage.case3Action === localStorage.case3KeyAction)
    {
        document.getElementById("result").innerText = "Success!!";
        //give 400 points
        var decision_score =400;
    }
    else {
        document.getElementById("result").innerText = "Uh Oh...";
        //give 100 points
        var decision_score =100;
    }
//Show Action Taken
document.getElementById("action").innerHTML = localStorage.case3Action;
console.log("You Chose: " + localStorage.case3Action);
console.log("Key Action: " + localStorage.case3KeyAction);
    //display image matching action
    //document.getElementById("actionIcon").src = ();

//display Explanation
document.getElementById("explanation").innerText = (localStorage.case3Outcome);

//Show correct Remember Box
if (localStorage.case3KeyAction === "Observation")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberObs.svg'};

if (localStorage.case3KeyAction === "CT Scan")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberCT.svg'};

if (localStorage.case3KeyAction === "Surgery")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberSurg.svg'};
    
if (localStorage.case3KeyAction === "Intervention")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberInt.svg'};
//Score Calculator
$('#decPoints1').text(decision_score);

$('#timePoints1').text(time_score);
localStorage.case3Score = time_score + decision_score;
$('#totalPoints1').text(time_score+decision_score);
