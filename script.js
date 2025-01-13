/*
   🦜 PARROT SIGNATURE 🦜

   Crafted with 🖤 by Your Name

   "Logic that flies as high as the parrot in the sky."
*/

const years = [
    { year: "2009", title: "Born to Shine", text: "The world got brighter in 2009 when I arrived. A little bundle of potential ready to take on life!", photo: "images/2009.jpg", themeColor: "#FF6B6B" },
    { year: "2010", title: "Tiny Explorer", text: "I started to explore the world, one wobbly step at a time. Life was all about discovery!", photo: "images/2010.jpg", themeColor: "#FFA07A" },
    { year: "2011", title: "First Words", text: "From random sounds to actual words! Communication began, and life got more interesting.", photo: "images/2011.jpg", themeColor: "#FFD700" },
    { year: "2012", title: "Play and Laughter", text: "This year was all about running around, laughing uncontrollably, and causing cute chaos.", photo: "images/2012.jpg", themeColor: "#98FB98" },
    { year: "2013", title: "Making Friends", text: "I met my first friends, and together we conquered playgrounds and snack time!", photo: "images/2013.jpg", themeColor: "#87CEFA" },
    { year: "2014", title: "Learning the Basics", text: "I learned to read and write, and the ABCs started to make sense. Big win!", photo: "images/2014.jpg", themeColor: "#9370DB" },
    { year: "2015", title: "First Day of School", text: "Walking into school with a brand-new backpack and a head full of dreams.", photo: "images/2015.jpg", themeColor: "#BA55D3" },
    { year: "2016", title: "Discovering Hobbies", text: "Tried a ton of new stuff—sports, drawing, and collecting cool rocks. Life was fun!", photo: "images/2016.jpg", themeColor: "#FF69B4" },
    { year: "2017", title: "More Creativity", text: "Art classes became my jam. There’s something awesome about turning ideas into reality.", photo: "images/2017.jpg", themeColor: "#FF4500" },
    { year: "2018", title: "Adventures Everywhere", text: "Family trips, exploring the outdoors, and making unforgettable memories.", photo: "images/2018.jpg", themeColor: "#1E90FF" },
    { year: "2019", title: "Taking Things Seriously", text: "Starting to think more about what I want to be and who I want to become. Still figuring it out.", photo: "images/2019.jpg", themeColor: "#32CD32" },
    { year: "2020", title: "Pandemic Life", text: "Stuck at home, but I found ways to keep it interesting. Lots of gaming and learning new things.", photo: "images/2020.jpg", themeColor: "#FF6347" },
    { year: "2021", title: "Back in Action", text: "Getting back to normal-ish. Reuniting with friends felt amazing!", photo: "images/2021.jpg", themeColor: "#FFA500" },
    { year: "2022", title: "Leveling Up", text: "Started taking life a bit more seriously. Bigger goals, better mindset.", photo: "images/2022.jpg", themeColor: "#00FA9A" },
    {
        year: "2023",
        title: "The Year of Love",
        text: "2023 was unforgettable. It’s the year I found something truly special.",
        photo: "images/2023.jpg",
        themeColor: "#FF1493",
        subEvents: [
            {
                title: "Summer of 2023",
                text: "The summer that changed everything. I met my girlfriend, and everything clicked. It was like the universe had lined up perfectly. We laughed, talked, and made the best memories together.",
                photo: "images/summer2023.jpg",
            }
        ],
    },
    { year: "2024", title: "Big Plans Ahead", text: "Getting ready for what’s next. A lot of exciting things in the works.", photo: "images/2024.jpg", themeColor: "#00CED1" },
    { year: "2025", title: "The Future is Bright", text: "This year feels like the start of something amazing. Let’s see what happens next.", photo: "images/2025.jpg", themeColor: "#9400D3" },
];

let currentIndex = 0;

const timeline = document.querySelector(".timeline");
const yearDetails = document.getElementById("year-details");
const yearTitle = document.getElementById("year-title");
const yearText = document.getElementById("year-text");
const yearPhoto = document.getElementById("year-photo");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

years.forEach(({ year, themeColor }) => {
    const yearDiv = document.createElement("div");
    yearDiv.classList.add("timeline-year");
    yearDiv.textContent = year;
    yearDiv.dataset.year = year;
    yearDiv.style.backgroundColor = themeColor;
    timeline.appendChild(yearDiv);
});

function updateYearDetails(index) {
    const { year, title, text, photo, themeColor, subEvents } = years[index];
    yearTitle.textContent = `${year} - ${title}`;
    yearText.textContent = text;
    yearPhoto.src = photo;

    if (subEvents) {
        const subEvent = subEvents[0];
        const subEventText = document.createElement("p");
        subEventText.textContent = `✨ ${subEvent.title}: ${subEvent.text}`;
        yearText.appendChild(subEventText);
    }

    document.body.style.backgroundColor = themeColor;
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

