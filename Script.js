const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
const todayText = document.getElementById("todayText");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

// Get the real current date from the user's device
const today = new Date();

let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
