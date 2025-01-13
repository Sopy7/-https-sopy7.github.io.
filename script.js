const years = [
    { year: "2009", title: "A Star is Born", text: "A bright star entered the world in 2009 and brought joy to all.", photo: "images/2009.jpg" },
    { year: "2012", title: "First Adventures", text: "Discovering the world one step at a time.", photo: "images/2012.jpg" },
    { year: "2015", title: "School Days", text: "Starting school with a backpack full of dreams.", photo: "images/2015.jpg" },
    { year: "2020", title: "Challenges Met", text: "Facing the challenges of the pandemic with resilience.", photo: "images/2020.jpg" },
    { year: "2025", title: "The Future Awaits", text: "A bright future lies ahead, full of possibilities.", photo: "images/2025.jpg" },
];

let currentIndex = 0;

const timeline = document.querySelector(".timeline");
const yearDetails = document.getElementById("year-details");
const yearTitle = document.getElementById("year-title");
const yearText = document.getElementById("year-text");
const yearPhoto = document.getElementById("year-photo");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

years.forEach(({ year }) => {
    const yearDiv = document.createElement("div");
    yearDiv.classList.add("timeline-year");
    yearDiv.textContent = year;
    yearDiv.dataset.year = year;
    timeline.appendChild(yearDiv);
});

function updateYearDetails(index) {
    const { year, title, text, photo } = years[index];
    yearTitle.textContent = `${year} - ${title}`;
    yearText.textContent = text;
    yearPhoto.src = photo;
    document.querySelectorAll(".timeline-year").forEach((el, i) => el.classList.toggle("selected", i === index));
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
