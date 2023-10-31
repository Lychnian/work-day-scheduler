# WORK DAY SCHEDULER

A straightforward calendar application that empowers users to efficiently plan their work day. This application addresses the critical need for effective time management, solving the challenge of organizing a very busy schedule. Motivated by the desire to enhance work productivity, this application allows users to add important events for each hour of a typical working day of 9 am to 5 pm. The application contains updated HTML and CSS powered by jQuery, to ensure a seamless user experience. At a glance, users can identify the current day displayed prominently at the top of the calendar. Time blocks are color-coded to distinguish between past, present, and future events. Also, events entered by the user are saved persistently in local storage, guaranteeing that valuable data remains intact even after the page is refreshed.
Can even use to organize your busy weekend day schedule!


## Installation

N/A


## Usage

Open the application by visiting the webpage at: https://lychnian.github.io/work-day-scheduler/

When you open the planner, the current day is displayed at the top of the calendar.

- **Adding Events:**
Scroll down to view time blocks for standard business hours (9 am to 5 pm).
Each time block is color-coded to indicate whether it is in the past (gray), present (red), or future (green).
Click into a time block to enter an event for that hour.

- **Saving Events:**
After entering an event, click the save button (represented by a floppy disk icon) for that time block.
The text for the event is saved in local storage.

- **Persisting Events:**
Upon refreshing the page, closing the browser or navigating from the page, the events entered will still be visible and accessible for the day. At the start of the new day, the events on the calendar from the previous day are cleared, and the data remains in storage.


## Website

Visit the live application: **Work Day Scheduler** at  https://lychnian.github.io/work-day-scheduler/


## Screenshots


LAPTOP AND PC VIEW:
![PCLaptopview](https://github.com/Lychnian/work-day-scheduler/assets/140586279/681ddf82-8aca-46c8-be76-426c961320cd)


RESPONSIVE VIEW FOR TABLETS:
![TabletView](https://github.com/Lychnian/work-day-scheduler/assets/140586279/4f7209db-6745-47e1-a0c3-b7a4924cfda7)



RESPONSIVE VIEW FOR MOBILE:
![MobileView](https://github.com/Lychnian/work-day-scheduler/assets/140586279/d631878e-6004-464d-b9da-d3ee91389130)



## Credits

- **Day.js Documentation:**
  - [Day.js Format Method](https://day.js.org/docs/en/display/format) (Line 20)
  - [Day.js Parse Method with String Format](https://day.js.org/docs/en/parse/string-format) (Line 21)

- **Stack Overflow Threads:**
  - [Changing Button Color Based on Time of Day](https://stackoverflow.com/questions/33398214/jquery-css-script-change-button-color-based-on-time-of-day) (Lines 35-39)
  - [Removing Existing Classes from an Element](https://stackoverflow.com/questions/62462599/how-can-i-change-elements-style-based-on-the-time-of-day) (Line 42)
  - [Dynamically Color Coding Rows Based on Hour](https://stackoverflow.com/questions/71213180/issue-trying-dynamically-color-code-rows-based-on-the-hour) (Lines 45-50)

- **Mozilla Developer Network (MDN) Documentation:**
  - [localStorage.setItem() Method](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem) (Line 75)


## License

This project is licensed under the MIT License - see the LICENSE file for details.





