document.addEventListener("DOMContentLoaded", function () {
    const calendarIcon = document.getElementById("calendar-icon");
    const calendarPopup = document.getElementById("calendar-popup");
    const closeCalendar = document.getElementById("close-calendar");
    const monthYear = document.getElementById("month-year");
    const calendarDays = document.getElementById("calendar-days");

    calendarIcon.addEventListener("click", function () {
        calendarPopup.style.display = "block";
        renderCalendar();
    });

    closeCalendar.addEventListener("click", function () {
        calendarPopup.style.display = "none";
    });

    function renderCalendar() {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        // Clear existing calendar
        calendarDays.innerHTML = "";
        monthYear.textContent = `${getMonthName(currentMonth)} ${currentYear}`;

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentYear, currentMonth, day);
            const dayElement = document.createElement("div");
            dayElement.textContent = day;
            dayElement.classList.add("day");

            if (date.toDateString() === now.toDateString()) {
                dayElement.classList.add("current-day");
            }

            calendarDays.appendChild(dayElement);
        }
    }

    function getMonthName(month) {
        const months = [
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ];
        return months[month];
    }
});