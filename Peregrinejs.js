var JSONFEED = 'https://spreadsheets.google.com/feeds/list/1dpcguZ2Ak0zc0Sh1WoPV0c0tXVxre3yGWC1Wo5ElWtc/1/public/basic?alt=json';

$(document).ready(function() {
  $.ajax({
    url: JSONFEED,
    success: function(data) {
      readData(data);
    }
  });
});

function readData(data) {
  var partfeed = data.feed.entry;
  var divData = [];
  for (var i = 0; i < 2; i++) {
    var JSONrow = partfeed[i].content.$t.split(',');
    var row = [];
  for (var j = 0; j < JSONrow.length; j++) {
      val = JSONrow[j].split(':')[1];
      row[j] = val;
    }
    if (i != 0) {
    	scenario = row[1];
      drawCase(row, scenario, "#caseDetails");
      drawVitals(row, scenario, "#vitals");
    }
  }
}

function drawCase(divData, scenario) {
  if (divData == null) return null;

  title = $.trim(divData[1]);
  age = $.trim(divData[2]);
  gender = $.trim(divData[3]);
  


  var $caseDiv = $("<div/>");  
  var casedetails = $("<p></p>").html("A " + age + "-year-old " + gender + scenario); 
  $caseDiv.prepend(casedetails);
  $('#caseDetails').append($caseDiv);
  }

function drawVitals (divData) {
    tempc = $.trim(divData[4]);
    tempf = $.trim(divData[5]);
    //console.log("Temperature is"+tempf); values pull fine
    bpsys = $.trim(divData[6]);
    bpdia = $.trim(divData[7]);
    hr = $.trim(divData[8]);
    oxy = $.trim(divData[9]);

    var $vitalsDiv = $("<div/>");
    var vitals = $("<p></p>").html("T: " + tempc + "&degC / " + tempf + "&degF" + " <br> BP: " + bpsys + "/" + bpdia + " <br> HR: " + hr + "<br>SpO2: " + oxy);
    $vitalsDiv.prepend(vitals);
    $('#vitals').append($vitalsDiv);
  }

  /*
  outcomeObs = $.trim(divData[10]);
  outcomeCT = $.trim(divData[11]);
  outcomeSurg = $.trim(divData[12]);
  outcomeInt = $.trim(divData[13]);
*/

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