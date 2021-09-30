// grab the div with class of container and store in variable
var calendar = $(".container");
// grab current date p tag and stor in variable
var currentDate = $('#currentDay');
// crate global variables
var timeBox, hourOfDay, scheduleInput, saveButton, hourSpan, saveIcon;

// use moment.js to generate the current date

// use moment.js to generate the current time
var $div = $("<div>", {id: "foo", "class": "a"});
// iterate 24 times to create rows of data with 3 total columns
for (var i = 0; i < 24; i++) {
	// create div for the time box rows
	timeBox = $("<div>", {"class": "input-group input-group-lg", id: `${i+1}`});
	// create div to hold hour display span tag and create span tag
	hourDiv = $("<div>", {"class": "input-group-prepend text-center", "style": "width: 15%"});
	hourSpan = $("<span>", {"class": "input-group-text d-flex justify-content-center", "style": "width: 100%"});
	// create input text box
	scheduleInput = $("<input>", {"class": "form-control", "type": "text", "aria-label": "text-box for calendar entry", "aria-describedby": `schedule-entry-${i+1}`});
    // create div to hold save button and create button element
    saveDiv = $("<div>", {"class": "input-group-append"})
	saveButton = $("<button>", {"class": "btn btn-outline-secondary", "type": "button", id: `schedule-entry-${i+1}`});
    // create save button icon element and add font awesome class for icon
    saveIcon = $("<i>", {"class": "fas fa-save"});
	// append timeBox to the calendar
    calendar.append(timeBox);
    // append hour span to div and append div to timeBox
    timeBox.append(hourDiv);
    hourDiv.append(hourSpan);
    // TODO - use the index to dynamically the hours in military time
    if (i - 11 <= 0) {
        hourSpan.text(`${i+1}:00 AM`);
    } else if (i === 23) {
        hourSpan.text(`${i-11}:00 AM`)
    } else {
        hourSpan.text(`${i-11}:00 PM`);
    }
    // append input to the timeBox
    timeBox.append(scheduleInput);
    // append save button div to timeBox and append button to div
    timeBox.append(saveDiv);
    saveDiv.append(saveButton);
    saveButton.append(saveIcon);
    // add event listener to 
}






// when planner is opened, the current day is displayed at the top of the calendar

//// calendar needs time blocks (rows) for standard business hours

// time blocks are color coordinated to indicate the past (gray), the present (orange), and the future (turquoise)

//// when time block (row) is clicked, the user can enter text

// when the save button is clicked, the text for that input is saved to local storage and text input becomes 

// when page is refreshed, the saved text is still in the time block











// var triviaQuestions = [
// 	{
// 		question: 'What is my first name?',
// 		options: [ 'Jack', 'Cole', 'Emilio', 'Damien' ],
// 		correctAnswer: 'Jack'
// 	},
// 	{
// 		question: 'What is your favorite coding language?',
// 		options: [ 'CSS', 'C++', 'Rust', 'Javascript' ],
// 		correctAnswer: 'Javascript'
// 	}
// ];

// var displayDiv = document.getElementById('displayDiv');

// var questionText, optionsText, timeRemaining, questionPara, optionsBtn, questionDiv;
// var currentIndex = 0;
// var userScore = 0;

// function updateQuiz() {
//     questionDiv = document.createElement('div');
//     displayDiv.appendChild(questionDiv);

// 	questionText = triviaQuestions[currentIndex].question;
// 	questionPara = document.createElement('p');
// 	questionPara.textContent = questionText;
// 	questionDiv.appendChild(questionPara);

// 	for (var i = 0; i < 4; i++) {
//         // create options button
//         optionsBtn = document.createElement('button');
//         // set text of option button to be the text of the option (from the array)
//         optionsText = triviaQuestions[currentIndex].options[i];
//         optionsBtn.textContent = optionsText;
//         // append the button to the div
//         questionDiv.appendChild(optionsBtn);

//         optionsBtn.addEventListener("click", function() {
//             if (optionsBtn.textContent === triviaQuestions[currentIndex].correctAnswer) {
//                 console.log("you got it right");
//                 userScore++;
//             } else {
//                 console.log("you got it wrong");
//                 timeRemaining -= 10;
//             }
//             if (currentIndex < triviaQuestions.length - 1){
//                 currentIndex++;
//                 questionDiv.remove();
//                 updateQuiz();
//             } else {
//                 endGame();
//             }
//         });
//     }
// }
