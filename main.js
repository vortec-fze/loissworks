$(document).ready(function(){

  $('#bestcontact_input').on('change', function () {
    $("#patphonew").css('display', (this.value == '2') ? 'block' : 'none');
});
    $('#bestcontact_input').on('change', function () {
    $("#patphonem").css('display', (this.value == '3') ? 'block' : 'none');
});
    $('#bestcontact_input').on('change', function () {
    $("#patemail").css('display', (this.value == '4') ? 'block' : 'none');
});
    $('#bestcontact_input').on('change', function () {
    $("#patphoneh").css('display', (this.value == '1') ? 'block' : 'none');
});
    $('#bestcontact_input').on('change', function () {
    $("#patphonem").css('display', (this.value == '5') ? 'block' : 'none');
});
     $('#bestcontact_input').on('change', function () {
    $("#patfax").css('display', (this.value == '7') ? 'block' : 'none');
});
});

