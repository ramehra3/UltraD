//display case title & Key Image
document.getElementById("diagnosis").innerText = localStorage.case4Title;
document.getElementById("keyImage").src = ("http://drive.google.com/uc?export=view&id=" + localStorage.case4KeyImg);
var time_score = -1*( parseInt(localStorage.minutes)*60 + parseInt(localStorage.seconds));
//Show Result
if (localStorage.case4Action === localStorage.case4KeyAction)
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
document.getElementById("action").innerHTML = localStorage.case4Action;
console.log("You Chose: " + localStorage.case4Action);
console.log("Key Action: " + localStorage.case4KeyAction);
    //display image matching action
if (localStorage.case4Action === "Observation")
    {document.getElementById("actionicon").src= './ProgramFiles/Icons/obs.png'}

if (localStorage.case4Action === "CT Scan")
    {document.getElementById("actionicon").src= './ProgramFiles/Icons/ctScan.png'}

if (localStorage.case4Action === "Surgery")
    {document.getElementById("actionicon").src= './ProgramFiles/Icons/surg.png'}

if (localStorage.case4Action === "Intervention")
    {document.getElementById("actionicon").src= './ProgramFiles/Icons/intervention.png'}
//display Explanation
document.getElementById("explanation").innerText = (localStorage.case4Outcome);

//Show correct Remember Box
if (localStorage.case4KeyAction === "Observation")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberObs.svg'};

if (localStorage.case4KeyAction === "CT Scan")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberCT.svg'};

if (localStorage.case4KeyAction === "Surgery")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberSurg.svg'};

if (localStorage.case4KeyAction === "Intervention")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberInt.svg'};
//Score Calculator
$('#decPoints1').text(decision_score);

$('#timePoints1').text(time_score);
localStorage.case4Score = time_score + decision_score;
$('#totalPoints1').text(time_score+decision_score);