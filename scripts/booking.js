/********* create variables here *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $25, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $40, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value



var dailyRate = 40;

var costDisplay = document.getElementById('calculated-cost');
var daysSelector = document.querySelectorAll('.day-selector li');
var halfButton = document.getElementById('half');
var fullButton = document.getElementById('full');
var clearButton = document.getElementById('clear-button');

function updateTotalCost() {
    var numDaysSelected = document.querySelectorAll('.day-selector li.clicked').length;
    var totalCost = numDaysSelected * dailyRate;
    costDisplay.textContent = totalCost;
}

function handleRateChange(clickedRate, otherRate) {
    dailyRate = clickedRate;
    this.classList.add('clicked');
    otherRate.classList.remove('clicked');
    updateTotalCost();
}

halfButton.addEventListener('click', handleRateChange.bind(halfButton, 25, fullButton));
fullButton.addEventListener('click', handleRateChange.bind(fullButton, 40, halfButton));

daysSelector.forEach(function(day) {
    day.addEventListener('click', function() {
        this.classList.toggle('clicked');
        updateTotalCost();
    });
});

clearButton.addEventListener('click', function() {
    daysSelector.forEach(function(day) {
        day.classList.remove('clicked');
    });
    dailyRate = 40;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    updateTotalCost();
});


