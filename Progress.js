$(document).ready(function() {

    $('#LeftLungImage').hide()
    $('#RightLungImage').hide()
    $('#SubXImage').hide()
    $('#RUQImage').hide()
    $('#LUQImage').hide()
    $('#BladderImage').hide()
  
    $('#lLungicon').hover(function() {
      $('#LeftLungImage').show()
    }, function() {
      $('#LeftLungImage').hide()
    })
  
    $('#rLungicon').hover(function() {
      $('#RightLungImage').show()
    }, function() {
      $('#RightLungImage').hide()
    })
  
    $('#subxicon').hover(function() {
      $('#SubXImage').show()
    }, function() {
      $('#SubXImage').hide()
    })
  
    $('#ruqicon').hover(function() {
      $('#RUQImage').show()
    }, function() {
      $('#RUQImage').hide()
    })
  
    $('#luqicon').hover(function() {
      $('#LUQImage').show()
    }, function() {
      $('#LUQImage').hide()
    })
  
    $('#bladdericon').hover(function() {
      $('#BladderImage').show()
    }, function() {
      $('#BladderImage').hide()
    })
  
  });
  