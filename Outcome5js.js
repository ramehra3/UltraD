//display case title & Key Image
document.getElementById("diagnosis").innerText = localStorage.case5Title;
document.getElementById("keyImage").src = ("http://drive.google.com/uc?export=view&id=" + localStorage.case5KeyImg);
//Show Result
if (localStorage.case5Action === localStorage.case5KeyAction)
    {
        document.getElementById("result").innerText = "Success!!";
        //give 400 points
    }
    else {
        document.getElementById("result").innerText = "Uh Oh...";
        //give 100 points
    }
//Show Action Taken
document.getElementById("action").innerHTML = localStorage.case5Action;
console.log("You Chose: " + localStorage.case5Action);
console.log("Key Action: " + localStorage.case5KeyAction);
    //display image matching action
    //document.getElementById("actionIcon").src = ();

//display Explanation
document.getElementById("explanation").innerText = (localStorage.case5Outcome);

//Show correct Remember Box
if (localStorage.case5KeyAction === "Observation")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberObs.svg'};

if (localStorage.case5KeyAction === "CT Scan")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberCT.svg'};

if (localStorage.case5KeyAction === "Surgery")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberSurg.svg'};

if (localStorage.case5KeyAction === "Intervention")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberInt.svg'};
//Score Calculator

