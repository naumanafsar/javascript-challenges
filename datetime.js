var today = new Date();
var day = today.getDay();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday"];
console.log("Today is: " + days[day]+".");

var hr = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();
console.log("The Time is: "+hr+":"+min+":"+sec+".");
