$(function () {

  // Defined Variables
  // Variables to store the current hour and dates using Day.js
  var currentHour = dayjs().hour();
  var currentDate = dayjs().format("dddd, MMMM D");
  var timeBlockElement = ".time-block";
  var descriptionElement = ".description";
  var saveBtnElement = ".saveBtn";
  var currentDayElement = $("#currentDay");
  
  // Function to display current date in the header
  function displayCurrentDate() {
    currentDayElement.text(currentDate);
  }

  // Function to update time-block colors based on current time
  function updateTimeBlockColors() {
    $(timeBlockElement).each(function () {
      var blockHour = parseInt(this.id.split("-")[1]);

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

  // Function to load saved events from localStorage
  function loadSavedEvents() {
  $(timeBlockElement).find(descriptionElement).each(function () {
    var blockId = $(this).closest(timeblockElement).attr("id");
    var savedEvent = localStorage.getItem(blockId);
    $(this).val(savedEvent);
    });
  }

  // Event listener for save buttons
  $(saveBtnElement).on("click", function () {
    var blockId = $(this).closest(timeblockElement).attr("id");
    var description = $(this).siblings(descriptionElement).val();
    localStorage.setItem(blockId, description);
  });

  // Initialize the scheduler when the page loads
  displayCurrentDate(); // Display the current date in the header
  updateTimeBlockColors(); // Update time-block colors based on current time
  loadSavedEvents(); // Load saved events from localStorage
  

});