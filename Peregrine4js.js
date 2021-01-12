class CaseData {
    constructor(age,gender,scenario,bpsys,bpdia,hr,tempc,oxy)
        {this.age = age;
        this.gender = gender;
        this.scenario = scenario;
        this.bpsys = bpsys;
        this.bpdia = bpdia;
        this.hr = hr;
        this.tempc = tempc;
        this.oxy = oxy;}
}

let case4 = new CaseData(19, //age
    "female", //gender
    "presents to the ED after she was a belted passenger in a motor vehicle collision. She is unresponsive, intermittently wincing in pain.", 
    102, //BPsys
    64,  //BPdia
    125, //HR
    37.0, //Tcelcius (need conversion)
    92); //O2 Saturation

document.getElementById("caseDetails").innerHTML =
    ("A " + case4.age + "-year-old " + case4.gender + " " + case4.scenario);
document.getElementById("BP").innerHTML =("BP: " + case4.bpsys + "/" + case4.bpdia);
document.getElementById("HR").innerHTML =("HR: " + case4.hr);
document.getElementById("T").innerHTML =("T: " + case4.tempc +"°C"); //fix degree symbol//
document.getElementById("O2").innerHTML =("spO2: " + case4.oxy +"%");


viewedRUQ = false;
viewedLUQ = false;
viewedSubxi = false;
viewedBladder = false;
viewedLungL = false;
viewedLungR = false;


function showActions() {
    let x = document.getElementById("actionBox");
    if (viewedRUQ,viewedLUQ,viewedSubxi,viewedBladder,viewedLungR, viewedLungL === true) {
        x.style.display = "block";}
    else {x.style.display = "none";}
}

let sec = 0;
function pad(val) {return val > 9 ? val : "0" + val;}
let timer = setInterval(function () {
    document.getElementById("seconds").innerHTML = pad(++sec % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(sec/60, 10));
}, 1000);

setTimeout(function () {
    clearInterval(timer);}, 999999);
//to-do: record time at point of selection - save as variable

function switchLUQ() {
    newLocation = "Left Upper Quadrant";
    document.getElementById("currentLocation").innerText = ("Current Location: " + newLocation);
    document.getElementById("activeWindow").src="Case4/luq-nl-c4.gif";
    viewedLUQ = true;
    showActions();
}

function switchRUQ() {
    newLocation = "Right Upper Quadrant";
    document.getElementById("currentLocation").innerText = ("Current Location: " + newLocation);
    document.getElementById("activeWindow").src="Case4/ruq-nl-5.gif";
    viewedRUQ = true;
    showActions();
}

function switchSubxi() {
    newLocation = "Subxiphoid";
    document.getElementById("currentLocation").innerText = ("Current Location: " + newLocation);
    document.getElementById("activeWindow").src="Case4/subxi-pos-c4.gif";
    viewedSubxi = true;
    showActions();
}

function switchBladder() {
    newLocation = "Pelvic";
    document.getElementById("currentLocation").innerText = ("Current Location: " + newLocation);
    document.getElementById("activeWindow").src="Case4/bladder-nl-m-c4.gif";
    viewedBladder = true;
    showActions();
}

function switchLungr() {
    newLocation = "Lung (R)";
    document.getElementById("currentLocation").innerText = ("Current Location: " + newLocation);
    document.getElementById("activeWindow").src="Case4/nl-lung-1-c2-R-Copy.gif";
    viewedLungR = true;
    showActions();
}

function switchLungl() {
    newLocation = "Lung (L)";
    document.getElementById("currentLocation").innerText = ("Current Location: " + newLocation);
    document.getElementById("activeWindow").src="Case4/nl-lung-2-c2-L-Copy.gif";
    viewedLungL = true;
    showActions();
}

//location button control
var header = document.getElementById("locationIcons");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

function actionObs() {
    actionChoice = "Observation";
    window.location.href = "Outcome4-Obs.html";
}


function actionCT() {
    actionChoice = "CT Scan";
    window.location.href = "Outcome4-CT.html";
}

function actionSurg() {
    actionChoice = "Surgery";
    window.location.href = "Outcome4-Surg.html";
}

function actionIntervene() {
    actionChoice = "Intervention";
    window.location.href = "Outcome4-Intervene.html";
}
/*
class caseOutcomes {
    constructor(outcomeObs, outcomeCT, outcomeSurg, outcomeInt) {
        this.outcomeObs = outcomeObs;
        this.outcomeCT = outcomeCT;
        this.outcomeSurg = outcomeSurg;
        this.outcomeInt = outcomeInt;
    }
}

let case1Outcomes = new caseOutcomes("This patient's FAST exam is positive in the left upper quadrant. Patient is admitted overnight for further observation, and spends the night in excruciating pain without a clue as to why. The next day, a CT scan reveals a grade II splenic laceration which you missed.",
    "This patient's FAST exam is positive in the left upper quadrant. You take the patient for a CT scan, which reveals a grade II splenic laceration. Patient is admitted overnight.",
    "This patient's FAST exam is positive in the left upper quadrant. Patient is rushed to the operating room for an exploratory laparotomy, which finds no evidence of damage. Patient is discharged home with a scar and a story to remember you by.",
    "This patient's FAST exam is positive in the left upper quadrant. You perform a needle thoracostomy and place a chest tube in the patient's left chest which does not put out any fluid. A colleague suggests sending the patient for a CT scan, which ultimately reveals a grade II splenic laceration. Patient is admitted overnight with a new story to tell his wife, a malpractice attorney.");

//success or fail message
if (actionChoice === "CT Scan") {
    document.getElementById("result").innerText = ("Success!")
}
else {document.getElementById("result").innerText = ("Uh Oh!");
}


if (actionChoice === "Observation") {
document.getElementById("explanation").innerText = (case1Outcomes.outcomeObs);}

if (actionChoice === "CT Scan") {
    document.getElementById("explanation").innerText = (case1Outcomes.outcomeCT);}
if (actionChoice === "Surgery") {
    document.getElementById("explanation").innerText = (case1Outcomes.outcomeSurg);}
if (actionChoice === "Intervention") {
    document.getElementById("explanation").innerText = (case1Outcomes.outcomeInt);}
    */