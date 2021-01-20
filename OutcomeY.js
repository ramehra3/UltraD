var success = true;
console.log(success);

if (success == false) {
  $('#header').text("Uh Oh...");
} else {
  $('#header').text("Success!!");
}
  
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

//read action choice from page
let actionChoice = document.getElementById("action");

//show explanation by action choice
//show proper score
//Remember Box Formatting/sizing
//Fix Button sizing

//success or fail message
/*function showResult() {
    document.getElementById("result").innerText = actionChoice === "CT Scan" ? ("Success!") : ("Uh Oh!");
}*/
//Outcome by actionChoice
//document.getElementById("explanationObs").innerText = (case1Outcomes.outcomeObs);
document.getElementById("explanationCT").innerText = (case1Outcomes.outcomeCT);
    
//document.getElementById("explanationSurg").innerText = (case1Outcomes.outcomeSurg);

//document.getElementById("explanationInt").innerText = (case1Outcomes.outcomeInt);