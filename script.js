const years = [
    {
        year: "2009",
        title: "A Star is Born",
        text: "In 2009, a bright star was born into the world, bringing joy and love to everyone around.",
        photo: "images/2009.jpg",
    },
    {
        year: "2010",
        title: "First Steps",
        text: "By 2010, those tiny feet started to explore the world, taking wobbly but determined steps.",
        photo: "images/2010.jpg",
    },
    {
        year: "2015",
        title: "School Days Begin",
        text: "The first day of school! A big milestone marked with excitement, curiosity, and a new backpack.",
        photo: "images/2015.jpg",
    },
    {
        year: "2020",
        title: "Resilience Through Challenges",
        text: "2020 was a year of challenges, but it taught resilience and adaptability like never before.",
        photo: "images/2020.jpg",
    },
    {
        year: "2025",
        title: "The Future Awaits",
        text: "The journey so far has been incredible, and the future holds endless possibilities. Here's to achieving dreams!",
        photo: "images/2025.jpg",
    },
];

let currentIndex = 0;

const timeline = document.querySelector(".timeline");
const yearDetails = document.getElementById("year-details");
const yearTitle = document.getElementById("year-title");
const yearText = document.getElementById("year-text");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

// Dynamically Add Years to Timeline
years.forEach(({ year }) => {
    const yearDiv = document.createElement("div");
    yearDiv.classList.add("timeline-year");
    yearDiv.textContent = year;
    yearDiv.dataset.year = year;
    timeline.appendChild(yearDiv);
});

// Update Year Details
function updateYearDetails(index) {
    const { year, title, text, photo } = years[index];
    yearTitle.textContent = `${year} - ${title}`;
    yearText.textContent = text;
    yearDetails.style.backgroundImage = `url('${photo}')`;

    document.querySelectorAll(".timeline-year").forEach((el, i) => {
        el.classList.toggle("selected", i === index);
    });

    yearDetails.classList.remove("hidden");
    currentIndex = index;
}

// Handle Year Click
timeline.addEventListener("click", (e) => {
    if (e.target.classList.contains("timeline-year")) {
        const selectedYear = e.target.dataset.year;
        const index = years.findIndex(({ year }) => year === selectedYear);
        updateYearDetails(index);
    }
});

// Navigate Timeline with Arrows
function navigateTimeline(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = years.length - 1;
    if (currentIndex >= years.length) currentIndex = 0;
    updateYearDetails(currentIndex);
}

leftArrow.addEventListener("click", () => navigateTimeline(-1));
rightArrow.addEventListener("click", () => navigateTimeline(1));

// Load the Initial Year
updateYearDetails(0);
