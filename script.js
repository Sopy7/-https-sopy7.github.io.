const years = [
    {
        year: "2009",
        title: "The Beginning",
        text: "The year it all started! A time of discovery and new beginnings.",
        photo: "images/2009.jpg"
    },
    {
        year: "2015",
        title: "Big Dreams",
        text: "Learning, growing, and chasing big dreams during this era.",
        photo: "images/2015.jpg"
    },
    {
        year: "2020",
        title: "Adapting to Change",
        text: "A year that challenged us all but taught resilience and growth.",
        photo: "images/2020.jpg"
    },
    {
        year: "2025",
        title: "The Future Awaits",
        text: "The possibilities are endless. Here's to the adventures ahead! 🚀",
        photo: "images/2025.jpg"
    },
];

let currentYearIndex = 0;

// DOM Elements
const timeline = document.querySelector('.timeline');
const yearDetails = document.getElementById('year-details');
const yearTitle = document.getElementById('year-title');
const yearText = document.getElementById('year-text');
const yearPhoto = document.getElementById('year-photo');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const timelineYears = document.querySelectorAll('.timeline-year');

// Update Year Details
function updateYearDetails(yearIndex) {
    const yearData = years[yearIndex];
    yearTitle.textContent = yearData.title;
    yearText.textContent = yearData.text;
    yearPhoto.src = yearData.photo;
    yearDetails.classList.remove('hidden');
}

// Handle Year Click
timeline.addEventListener('click', (e) => {
    if (e.target.classList.contains('timeline-year')) {
        const selectedYear = e.target.dataset.year;
        const yearIndex = years.findIndex((y) => y.year === selectedYear);
        updateYearDetails(yearIndex);

        // Update Selected Style
        timelineYears.forEach((y) => y.classList.remove('selected'));
        e.target.classList.add('selected');
    }
});

// Handle Arrows
function navigateTimeline(direction) {
    currentYearIndex += direction;

    // Loop around if necessary
    if (currentYearIndex < 0) currentYearIndex = years.length - 1;
    if (currentYearIndex >= years.length) currentYearIndex = 0;

    timeline.scrollBy({
        left: direction * 150,
        behavior: 'smooth',
    });
}

leftArrow.addEventListener('click', () => navigateTimeline(-1));
rightArrow.addEventListener('click', () => navigateTimeline(1));
