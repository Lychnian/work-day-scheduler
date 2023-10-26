$(function () {
  // Function to display current date in the header
  function displayCurrentDate() {
    var currentDate = dayjs().format("dddd, MMMM D");
    $("#currentDay").text(currentDate);
  }

  // Function to update time-block colors based on current time
  function updateTimeBlockColors() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
       } else {
        $ (this).removeClass("past present").addClass("future");
      }
  });
}


  





// Call function to initialize the scheduler
displayCurrentDate();

})



  


