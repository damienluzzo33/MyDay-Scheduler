// grab the div with class of container and store in variable
var calendar = $('.container');
// grab current date p tag and stor in variable
var currentDate = $('#currentDay');
// crate global variables
var timeBox, hourOfDay, scheduleInput, saveButton, hourSpan, saveIcon;

// use moment.js to generate the current date
function getCurrentDate() {
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDate.text(date);
}

setInterval(getCurrentDate, 1000);

// use moment.js to generate the current time
function checkTime(){
    var currentTime = Number(moment().format('HH'));
    console.log(currentTime)
    for (var i = 0; i < calendar.children().length; i++) {
        var timeBoxElements = calendar.children()[i];
        var hour = Number(timeBoxElements.children[0].children[0].id);
        if (currentTime === hour) {
            timeBoxElements.setAttribute("class", "input-group input-group-lg row m-0 pr-0 col d-flex justify-content-center present")
        } else if (currentTime > hour) {
            timeBoxElements.setAttribute("class", "input-group input-group-lg row m-0 pr-0 col d-flex justify-content-center past")
        } else {
            timeBoxElements.setAttribute("class", "input-group input-group-lg row m-0 pr-0 col d-flex justify-content-center future")
        }
    }
}

setInterval(checkTime, 1000);

// iterate 24 times to create rows of data with 3 total columns
for (var i = 0; i < 24; i++) {
	// create div for the time box rows
	timeBox = $('<div>', { class: 'input-group input-group-lg row m-0 pr-0 col d-flex justify-content-center', id: `${i + 1}` });
	// create div to hold hour display span tag and create span tag
	hourDiv = $('<div>', { class: 'col-2 row input-group-prepend text-center p-0' });
	hourSpan = $('<span>', { class: 'col input-group-text d-flex justify-content-center', style: 'font-size: 1rem', id: `${i + 1}` });
	// create input text box
	scheduleInput = $('<textarea>', { class: 'col-8 border-top border-bottom border-left-0', type: 'text', 'aria-label': 'text-box for calendar entry', 'aria-describedby': `schedule-entry-${i + 1}` });
	// create div to hold save button and create button element
	saveDiv = $('<div>', { class: 'input-group-append col-2 row p-0 m-0' });
	saveButton = $('<button>', { class: 'btn btn-outline-secondary col saveBtn', type: 'button', id: `schedule-entry-${i + 1}` });
	// create save button icon element and add font awesome class for icon
	saveIcon = $('<i>', { class: 'fas fa-save' });
	// append timeBox to the calendar
	calendar.append(timeBox);
	// append hour span to div and append div to timeBox
	timeBox.append(hourDiv);
	hourDiv.append(hourSpan);
	// TODO - use the index to dynamically the hours in military time
	if (i - 11 <= 0) {
		hourSpan.text(`${i + 1} AM`);
	} else if (i === 23) {
		hourSpan.text(`${i - 11} AM`);
	} else {
		hourSpan.text(`${i - 11} PM`);
	}
	// append input to the timeBox
	timeBox.append(scheduleInput);
	// append save button div to timeBox and append button to div
	timeBox.append(saveDiv);
	saveDiv.append(saveButton);
	saveButton.append(saveIcon);
}

var inputClickHandler = function(event) {
    console.log(event.target);
};

function buttonClickHandler() {
    console.log("saved!")
}

// add event listener on each button
saveButton.on('click', buttonClickHandler);



// class="text-muted"

//// when planner is opened, the current day is displayed at the top of the calendar

//// calendar needs time blocks (rows) for standard business hours

//// time blocks are color coordinated to indicate the past (gray), the present (orange), and the future (turquoise)

//// when time block (row) is clicked, the user can enter text

// when the save button is clicked, the text for that input is saved to local storage and text input becomes

// when page is refreshed, the saved text is still in the time block
