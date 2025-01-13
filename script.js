const years = [
    { year: "2009", title: "Born to Shine", text: "The beginning of a journey filled with potential.", themeColor: "#ffffff", subEvents: [{ title: "First Smile", text: "A small smile, the start of endless joy." }] },
    { year: "2023", title: "A Life-Changing Year", text: "This was the year I found love.", themeColor: "#f5f5f7", subEvents: [{ title: "The First Meeting", text: "A sunny afternoon that changed everything." }] },
    { year: "2025", title: "The Future Awaits", text: "Standing on the edge of infinite possibilities.", themeColor: "#e5e5ea", subEvents: [{ title: "Vision", text: "Ready to make dreams a reality." }] },
];

let currentIndex = 0;

const timeline = document.querySelector(".timeline");
const yearDetails = document.getElementById("year-details");
const yearTitle = document.getElementById("year-title");
const yearText = document.getElementById("year-text");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

years.forEach(({ year, themeColor }) => {
    const yearDiv = document.createElement("div");
    yearDiv.classList.add("timeline-year");
    yearDiv.textContent = year;
    yearDiv.dataset.year = year;
    timeline.appendChild(yearDiv);
});

function updateYearDetails(index) {
    const { year, title, text, themeColor, subEvents } = years[index];
    yearTitle.textContent = `${year} - ${title}`;
    yearText.innerHTML = text;
    document.body.style.backgroundColor = themeColor;

    const subEventContainer = document.getElementById("sub-events");
    subEventContainer.innerHTML = "";
    subEvents.forEach(({ title, text }) => {
        const subEvent = document.createElement("div");
        subEvent.innerHTML = `<h4>${title}</h4><p>${text}</p>`;
        subEventContainer.appendChild(subEvent);
    });

    document.querySelectorAll(".timeline-year").forEach((el, i) => {
        el.classList.toggle("selected", i === index);
    });

    yearDetails.classList.remove("hidden");
}

timeline.addEventListener("click", (e) => {
    if (e.target.classList.contains("timeline-year")) {
        currentIndex = years.findIndex(({ year }) => year === e.target.dataset.year);
        updateYearDetails(currentIndex);
    }
});

function navigateTimeline(direction) {
    currentIndex = (currentIndex + direction + years.length) % years.length;
    updateYearDetails(currentIndex);
}

leftArrow.addEventListener("click", () => navigateTimeline(-1));
rightArrow.addEventListener("click", () => navigateTimeline(1));

updateYearDetails(0);
