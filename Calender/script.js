
// let d = new Date("2025-07-18"); 

// console.log(d.getDay()); // 5 (Friday)
// const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const date = new Date(); // today's date
// const dayIndex = date.getDay(); // returns 0-6
// const weekdayName = weekdays[dayIndex];

// console.log(weekdayName); // e.g., "Fri"

// const date = new Date();
// const weekday = date.toLocaleDateString("en-US", { weekday: "short" }); // "Fri"
// const fullWeekday = date.toLocaleDateString("en-US", { weekday: "long" }); // "Friday"

// console.log(weekday);
// console.log(fullWeekday);

// script.js
const monthYear = document.getElementById("month-year");
const calendarGrid = document.getElementById("calendar-grid");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar(month, year) {
  calendarGrid.innerHTML = "";
  //new Date(2025, 6, 1); // 1st July 2025
  //.getDay(); // Tuesday hai, so output: 2

  const firstDay = new Date(year, month, 1).getDay();
  //new Date(2025, 7, 0); // 0th day of August 2025 = 31st July 2025
  //.getDate(); // yeh return karega 31

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  console.log(firstDay);
  console.log(daysInMonth);
  const key = `${year}-${month + 1}`;
  const saved = JSON.parse(localStorage.getItem("moods")) || {};

  monthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

  // Padding empty cells before the 1st day
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    calendarGrid.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = `${year}-${month + 1}-${day}`;
    const cell = document.createElement("div");
    cell.className = "day";
    cell.textContent = day;

    // Apply mood class
    const mood = saved[dateKey];
    if (mood) cell.classList.add(mood);

    cell.addEventListener("click", () => {
      const mood = prompt("Enter mood (good, average, bad):").toLowerCase();
      if (["good", "average", "bad"].includes(mood)) {
        saved[dateKey] = mood;
        localStorage.setItem("moods", JSON.stringify(saved));
        renderCalendar(currentMonth, currentYear);
      } else {
        alert("Invalid mood.");
      }
    });

    calendarGrid.appendChild(cell);
  }
}

prev.onclick = () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
};

next.onclick = () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
};

renderCalendar(currentMonth, currentYear);
