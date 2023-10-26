$(function () {
  // Defined Variables
  // Variables to store the current hour and dates using Day.js
  var currentHour = dayjs().hour();
  var currentDate = dayjs().format("dddd, MMMM D");

  // Function to display current date in the header
  function displayCurrentDate() {
    $("#currentDay").text(currentDate);
  }

  // Function to update time-block colors based on current time
  function updateTimeBlockColors() {
    $(".time-block").each(function() {
      var blockHour = parseInt(this.id.split("-") [1]);

      // Remove existing classes
      $(this).removeClass("past present future");
      
      // Add appropriate class based on comparison with currentHour
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }



  





// Call function to initialize the scheduler
displayCurrentDate();

})



  


