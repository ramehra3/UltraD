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

let case1 = new CaseData(37, //age
    "male", //gender
    "presents after an MVC in which he was a restrained driver. GCS 14. Complains of diffuse discomfort, with multiple large contusions on his chest, abdomen, and legs.",
    113, //bpsys
    76, //bpdia
    89, //hr
    36.0, //tcelcius
    94); //o2

class caseOutcomes {
    constructor(outcomeObs, outcomeCT, outcomeSurg, outcomeInt) {
        this.outcomeObs = outcomeObs;
        this.outcomeCT = outcomeCT;
        this.outcomeSurg = outcomeSurg;
        this.outcomeInt = outcomeInt;
    }
}
    
let case1Outcomes = new caseOutcomes(
    "This patient's FAST exam is positive in the left upper quadrant. Patient is admitted overnight for further observation, and spends the night in excruciating pain without a clue as to why. The next day, a CT scan reveals a grade II splenic laceration which you missed.",
    "This patient's FAST exam is positive in the left upper quadrant. You take the patient for a CT scan, which reveals a grade II splenic laceration. Patient is admitted overnight.",
    "This patient's FAST exam is positive in the left upper quadrant. Patient is rushed to the operating room for an exploratory laparotomy, which finds no evidence of damage. Patient is discharged home with a scar and a story to remember you by.",
    "This patient's FAST exam is positive in the left upper quadrant. You perform a needle thoracostomy and place a chest tube in the patient's left chest which does not put out any fluid. A colleague suggests sending the patient for a CT scan, which ultimately reveals a grade II splenic laceration. Patient is admitted overnight with a new story to tell his wife, a malpractice attorney."
    );
    

document.getElementById("caseDetails").innerHTML =
    ("A " + case1.age + "-year-old " + case1.gender + " " + case1.scenario);
document.getElementById("BP").innerHTML =("BP: " + case1.bpsys + "/" + case1.bpdia);
document.getElementById("HR").innerHTML =("HR: " + case1.hr);
document.getElementById("T").innerHTML =("T: " + case1.tempc +"&degC"); //fix degree symbol//
document.getElementById("O2").innerHTML =("spO2: " + case1.oxy +"%");


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
    document.getElementById("activeWindow").src="Case1/luq-free-fluid.gif";
    viewedLUQ = true;
    showActions();
}

function switchRUQ() {
    newLocation = "Right Upper Quadrant";
    document.getElementById("currentLocation").innerText = ("Current Location: " + newLocation);
    document.getElementById("activeWindow").src="Case1/ruq-nl-2.gif";
    viewedRUQ = true;
    showActions();
}

function switchSubxi() {
    newLocation = "Subxiphoid";
    document.getElementById("currentLocation").innerText = ("Current Location: " + newLocation);
    document.getElementById("activeWindow").src="Case1/subxi-nl-1.gif";
    viewedSubxi = true;
    showActions();
}

function switchBladder() {
    newLocation = "Pelvic";
    document.getElementById("currentLocation").innerText = ("Current Location: " + newLocation);
    document.getElementById("activeWindow").src="Case1/bladder-nl.gif";
    viewedBladder = true;
    showActions();
}

function switchLungr() {
    newLocation = "Lung (R)";
    document.getElementById("currentLocation").innerText = ("Current Location: " + newLocation);
    document.getElementById("activeWindow").src="Case1/normal-lung-slide.gif";
    viewedLungR = true;
    showActions();
}

function switchLungl() {
    newLocation = "Lung (L)";
    document.getElementById("currentLocation").innerText = ("Current Location: " + newLocation);
    document.getElementById("activeWindow").src="Case1/normal-lung-slide.gif";
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

//Action Buttons Here
function actionObs() {
    localStorage.setItem("actionChoice1", "Observation");//want to store this choice and reference it later (in Albo)
    window.location.href = "Outcome1-Obs.html";
    document.getElementById("c1result").innerHTML = localStorage.getItem("actionChoice1");
    document.getElementById("explanationObs").innerText = (case1Outcomes.outcomeObs);
}


function actionCT() {
    localStorage.setItem("actionChoice1", "CT Scan");
    window.location.href = "Outcome1-CT.html";
    document.getElementById("c1result").innerHTML = localStorage.getItem("actionChoice1");
    document.getElementById("explanationCT").innerText = (case1Outcomes.outcomeCT);
}

function actionSurg() {
    localStorage.setItem("actionChoice1", "Surgery");
    window.location.href = "Outcome1-Surg.html";
    document.getElementById("c1result").innerHTML = localStorage.getItem("actionChoice1");
    document.getElementById("explanationSurg").innerText = (case1Outcomes.outcomeSurg);

}

function actionIntervene() {
    localStorage.setItem("actionChoice1", "Intervention");
    window.location.href = "Outcome1-Intervene.html";
    document.getElementById("c1result").innerHTML = localStorage.getItem("actionChoice1");
    document.getElementById("explanationInt").innerText = (case1Outcomes.outcomeInt);
}



//success or fail message
/*
if (actionChoice === "CT Scan") {
    document.getElementById("result").innerText = ("Success!!") //!! to test js fxn
}
else {document.getElementById("result").innerText = ("Uh Oh!!");
}
*/

//display outcomes on outcome pages
//if i give outcomes their own js page, how will the ultimate outcome be recorded? 