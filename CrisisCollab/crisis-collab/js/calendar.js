
const calendarCells = document.querySelectorAll("#event-calendar tbody td");

calendarCells.forEach((cell) => {
    cell.addEventListener("click", () => {
        // Get date text from selected cell
        const dateText = cell.textContent.trim();

        const dateInfoElement = document.getElementById("selected-date-info");
        const disasterInfoElement = document.getElementById("selected-disaster-type")
        const disasterSeverityElement = document.getElementById("selected-severity-level")
        const disasterLocationElement = document.getElementById("selected-disaster-location")

        // Fill disaster nformation related fields
        switch (dateText) {
            case '':
                break;
            case '8':
                dateInfoElement.textContent = ``;
                disasterInfoElement.innerHTML = '<b>Disaster Type:</b> Hurricane';
                disasterSeverityElement.innerHTML = '<b>Severity Level:</b> Category 2'
                disasterLocationElement.innerHTML = '<b>Location:</b> California';
                break;
            case '24':
                dateInfoElement.textContent = ``;
                disasterInfoElement.innerHTML = '<b>Disaster Type:</b> Wildfire';
                disasterSeverityElement.innerHTML = '<b>Severity Level:</b> High'
                disasterLocationElement.innerHTML = '<b>Location:</b> Flordia';
                break;
            default:
                dateInfoElement.textContent = `There is no crisis event on date ${dateText}.`;
                disasterInfoElement.innerHTML = '';
                disasterSeverityElement.innerHTML = '';
                disasterLocationElement.innerHTML = '';
        }

    });
});
