$(function () {
// Function to display current date in the header
function displayCurrentDate() {
  var currentDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDate);
} 
