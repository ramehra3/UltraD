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
    // console.log('the Current Case Data is: ' + JSONrow);
    for (var j = 0; j < JSONrow.length; j++) {
      //console.log('we are on the ' + j + 'th iteration');
      val = JSONrow[j].split(':')[1];
      //console.log('the index is ' + j + ' and the value is ' + val);
      row[j] = val;
    }
    //trying to pull just row for the heck of it
    if (i != 0) {
    	scenario = row[1];
      //console.log(thehistory);
      drawDiv(row, scenario, "#caseDetails");
    }
  }
}

function drawDiv(divData, thehistory, parent) {
  if (divData == null) return null;

  //caseid = $.trim(divData[0]);
  //it appears it is not pulling case id, and index 0 is the title

  //title = $.trim(divData[0]);

  //history is pulling "[object history]" not the text there, haven't figured out why yet
  console.log(scenario);

  age = $.trim(divData[2]);
  //console.log("The age is "+ age)
  gender = $.trim(divData[3]);
  //console.log("The sex is "+ gender)
  tempc = $.trim(divData[4]);
  tempf = $.trim(divData[5]);
  //console.log("The temperature is "+ tempf+ " degrees F")
  bpsys = $.trim(divData[6]);
  //console.log("The BPsys= " + bpsys)
  bpdia = $.trim(divData[7]);
  //console.log("The BPdia= " + bpdia)
  hr = $.trim(divData[8]);
  //console.log("The HR= " + hr)
  oxy = $.trim(divData[9]);
  //console.log("The Oxy= " + oxy)
  // outcomeObs = $.trim(divData[10]);
  // outcomeCT = $.trim(divData[11]);
  // outcomeSurg = $.trim(divData[12]);
  // outcomeInt = $.trim(divData[13]);


  var $caseDiv = $("<div/>");
  $caseDiv.addClass('Case-Details');  
  var casedetails = $("<p></p>").html("A " + age + "-year-old " + gender + scenario); 
  $caseDiv.prepend(casedetails);
  $('#caseDetails').append($caseDiv);
  
  var $vitalsDiv = $("<div/>");
  $vitalsDiv.addClass('Vitals');
  var vitals = $("<p></p>").html("Vital Signs:" + " <br>T: " + tempc + "&degC / " + tempf + "&degF" + " <br> BP: " + bpsys + "/" + bpdia + " <br> HR: " + hr + "<br>SpO2: " + oxy);
  $caseDiv.prepend(vitals);
  $('#vital-signs').append($vitalsDiv);
  
  }