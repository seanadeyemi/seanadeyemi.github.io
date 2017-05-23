$(window).load(function() {
 var lastFocus;
	setTimeout(function() {
    lastFocus = document.activeElement;
    displayPopup();
  }, 3000);

function displayPopup(){
 $('#myModal').modal('show');
}

});