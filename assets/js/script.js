// grab the div with class of container and store in variable
var calendar = $('.container');
// grab current date p tag and stor in variable
var currentDate = $('#currentDay');
// grab the reset button
var resetButton = $('#reset-btn');
// crate global variables
var timeBox, hourOfDay, scheduleInput, saveButton, hourSpan, saveIcon, date, currentTime, scheduleArray;

// create a function that can be used to extract memory when page is reloaded or revisited
function extractAndDisplay() {
    // fetch the data from local storage and parse it
    let savedScheduleData = JSON.parse(localStorage.getItem("scheduleData"));

    if (!savedScheduleData) scheduleArray = new Array(19).fill("");
    else scheduleArray = savedScheduleData;
    // loop through the time boxes
    for (var i = 0; i < 19; i++){
        // console.log(savedTextInput);
        const data = scheduleArray[i];
        console.log(data);
        $('.userInput').eq(`${i}`).val(data);
    }
}


// define a function that calls checkTime and getCurrentTime functions
function fetchDateAndTime() {
    // use moment.js to generate the current date
    date = moment().format('MMMM Do YYYY, h:mm:ss a');
    // set text of currentDate element to the date
    currentDate.text(date);
    // use moment.js to generate the current time
    currentTime = Number(moment().format('HH'));
    // conditionally apply colors by looping through each of the time boxes
    for (var i = 0; i < calendar.children().length; i++) {
        // get children of the calendar
        var timeBoxElements = calendar.children()[i];
        var textAreaEl = timeBoxElements.children[1];
        // find the hour value associated with the time box
        var hour = Number(timeBoxElements.children[0].children[0].id);
        // if hour is the current hour
        if (currentTime === hour) {
            // set class to include present class
            $(textAreaEl).attr("class", "input-group input-group-lg row m-0 pr-0 col d-flex justify-content-center present")
            // if hour is a past hour
        } else if (currentTime > hour) {
            // set class to include past class
            $(textAreaEl).attr("class", "input-group input-group-lg row m-0 pr-0 col d-flex justify-content-center past")
            // if hour is a future hour
        } else {
            // set class to include future class
            $(textAreaEl).attr("class", "input-group input-group-lg row m-0 pr-0 col d-flex justify-content-center future")
        }
    }
}

// iterate 24 times to create rows of data with 3 total columns
for (var i = 0; i < 19; i++) {
	// create div for the time box rows
	timeBox = $('<div>', { class: 'input-group input-group-lg row m-0 pr-0 col d-flex justify-content-center', id: `${i + 6}` });
	// create div to hold hour display span tag and create span tag
	hourDiv = $('<div>', { class: 'col-2 row input-group-prepend text-center p-0' });
	hourSpan = $('<span>', { class: 'col input-group-text d-flex justify-content-center', style: 'font-size: 1rem', id: `${i + 6}` });
	// create input text box
	scheduleInput = $('<textarea>', { class: 'userInput col-8 border-top border-bottom border-left-0', type: 'text', 'aria-label': 'text-box for calendar entry', 'aria-describedby': `schedule-entry-${i + 6}`, id: `${i + 6}` });
	// create div to hold save button and create button element
	saveDiv = $('<div>', { class: 'input-group-append col-2 row p-0 m-0' });
	saveButton = $('<button>', { class: 'btn btn-outline-secondary col saveBtn', type: 'button', 'aria-label': "save button", id: `schedule-entry-${i + 6}` });
	// create save button icon element and add font awesome class for icon
	saveIcon = $('<i>', { class: 'fas fa-save' });
	// append timeBox to the calendar
	calendar.append(timeBox);
	// append hour span to div and append div to timeBox
	timeBox.append(hourDiv);
	hourDiv.append(hourSpan);
    // use conditional logic to set the correct time with AM or PM
	if (i - 6 < 0) hourSpan.text(`${i + 6} AM`);
    else if (i - 6 === 0) hourSpan.text('12 PM')
	else if (i === 18) hourSpan.text(`${i - 6} AM`);
	else hourSpan.text(`${i - 6} PM`);
	// append input to the timeBox
	timeBox.append(scheduleInput);
	// append save button div to timeBox and append button to div
	timeBox.append(saveDiv);
	saveDiv.append(saveButton);
	saveButton.append(saveIcon);
    // add event listener on each button and input
    saveButton.on('click', buttonClickHandler);
}
// create function for when the button is clicked
function buttonClickHandler() {
    // console.log($(this).parent().siblings().eq(1))
    // create variable to store the info input from the textarea
    var textAreaText = $(this).parent().siblings().eq(1).val();
    var inputIdKey = $(this).parent().siblings().eq(1).attr('id');
    // console.log(inputIdKey);
    scheduleArray[inputIdKey - 6] = textAreaText;
    // store textAreaText value in local storage with unique keys
    localStorage.setItem("scheduleData", JSON.stringify(scheduleArray));
};

// create function that will reset the values of all of the text boxes
function resetValues() {
    localStorage.clear();
    for (var i = 0; i < 19; i++){
        $('.userInput').eq(`${i}`).val('');
    }
    
}
// call the function to extract and display previously saved 
extractAndDisplay();
// use setInterval to fetch the current data and time every second (and immediately on page load)
fetchDateAndTime();
setInterval(fetchDateAndTime, 1000);
// add event listener for reset button
$(resetButton).on("click", resetValues);
