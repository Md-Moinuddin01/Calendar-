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

function renderCalendar() {

    calendarDays.innerHTML = "";

    // First day of the current month
    const firstDay = new Date(
        currentYear,
        currentMonth,
        1
    ).getDay();

    // Number of days in current month
    const daysInMonth = new Date(
        currentYear,
        currentMonth + 1,
        0
    ).getDate();

    // Number of days in previous month
    const daysInPreviousMonth = new Date(
        currentYear,
        currentMonth,
        0
    ).getDate();

    monthYear.textContent =
        `${months[currentMonth]} ${currentYear}`;

    // Previous month's dates
    for (let i = firstDay - 1; i >= 0; i--) {

        const day = document.createElement("div");

        day.textContent =
            daysInPreviousMonth - i;

        day.classList.add("other-month");

        calendarDays.appendChild(day);
    }

    // Current month's dates
    for (let date = 1; date <= daysInMonth; date++) {

        const day = document.createElement("div");

        day.textContent = date;

        // Check whether this date is today
        if (
            date === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        ) {

            day.classList.add("today");
        }

        // Select a date
        day.addEventListener("click", () => {

            document
                .querySelectorAll(".selected")
                .forEach(element => {
                    element.classList.remove("selected");
                });

            day.classList.add("selected");
        });

        calendarDays.appendChild(day);
    }

    // Fill remaining calendar cells
    const totalCells = 42;

    const remainingDays =
        totalCells - calendarDays.children.length;

    for (let date = 1; date <= remainingDays; date++) {

        const day = document.createElement("div");

        day.textContent = date;

        day.classList.add("other-month");

        calendarDays.appendChild(day);
    }
}

// Display today's date
function displayToday() {

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    todayText.textContent =
        `Today: ${today.toLocaleDateString("en-US", options)}`;
}

// Previous month
prevMonth.addEventListener("click", () => {

    currentMonth--;

    if (currentMonth < 0) {

        currentMonth = 11;
        currentYear--;
    }

    renderCalendar();
});

// Next month
nextMonth.addEventListener("click", () => {

    currentMonth++;

    if (currentMonth > 11) {

        currentMonth = 0;
        currentYear++;
    }

    renderCalendar();
});

// Initialize
renderCalendar();
displayToday();
