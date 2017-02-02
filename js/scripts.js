
var liters = function(gallons){
	return(gallons / 3.78);
}

var gallons2 = function(liters2){
	return(liters2 * 3.78);
  }

var confirm1 = confirm("Do you want to convert from liters to gallons?");


if (confirm1 == true) {
	var l2g = parseFloat(prompt("What number of liters would you like to convert?"))
	alert(liters(l2g));

} else {
	var g2l = parseFloat(prompt("How many gallons do you want to convert?"))
  alert(gallons2(g2l));
}
