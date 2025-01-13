/*
   🦜 PARROT SIGNATURE 🦜

   Crafted with 🖤 by Your Name

   "Logic that flies as high as the parrot in the sky."
*/

const years = [
    { year: "2009", title: "A Star is Born", text: "2009 was a life-changer (literally). The world had no idea what was coming, and then I showed up!", photo: "images/2009.jpg", themeColor: "#FFC1A1", subEvents: [{ title: "First Cry", text: "It all started with a cry, the first sound of a brand-new journey." }] },
    { year: "2010", title: "Tiny Explorer", text: "One wobbly step at a time, I started figuring out how to conquer the world—or at least the living room.", photo: "images/2010.jpg", themeColor: "#FDEAA8", subEvents: [{ title: "First Steps", text: "Wobbled around, but every step was a victory." }] },
    { year: "2011", title: "First Words", text: "Words started to flow, and I realized 'no' is powerful.", photo: "images/2011.jpg", themeColor: "#B8E2D0", subEvents: [{ title: "Favorite Word", text: "Why?" }] },
    { year: "2012", title: "Playful Times", text: "Playing, imagining, and building little adventures.", photo: "images/2012.jpg", themeColor: "#ADD8F6", subEvents: [{ title: "Playground Pro", text: "Mastered the slides and swings." }] },
    { year: "2013", title: "Friendships Begin", text: "Met some of my first friends and shared endless laughs.", photo: "images/2013.jpg", themeColor: "#D7BBF6", subEvents: [{ title: "BFFs", text: "Started a friendship that still lasts." }] },
    { year: "2014", title: "Learning and Growing", text: "Reading, writing, and understanding so much more about the world.", photo: "images/2014.jpg", themeColor: "#FFD6E0", subEvents: [{ title: "Big Words", text: "Started reading books with big words." }] },
    { year: "2015", title: "First Day of School", text: "A backpack, some nerves, and a head full of dreams.", photo: "images/2015.jpg", themeColor: "#FF9AA2", subEvents: [{ title: "First Friend at School", text: "Met someone who made school fun!" }] },
    { year: "2016", title: "Discovering Hobbies", text: "I started exploring hobbies like sports, drawing, and collecting cool stuff.", photo: "images/2016.jpg", themeColor: "#FBE4C3", subEvents: [{ title: "Cool Collections", text: "Started collecting rocks!" }] },
    { year: "2017", title: "Creative Spark", text: "Art and building things became my favorite ways to express myself.", photo: "images/2017.jpg", themeColor: "#B5EAEA", subEvents: [{ title: "Favorite Drawing", text: "A cool spaceship sketch." }] },
    { year: "2018", title: "Adventurous Spirit", text: "Took some amazing trips with my family. Nature was breathtaking.", photo: "images/2018.jpg", themeColor: "#A2D2FF", subEvents: [{ title: "Best Memory", text: "A hike with a perfect sunset." }] },
    { year: "2019", title: "Dreaming Big", text: "Started thinking more about who I wanted to become.", photo: "images/2019.jpg", themeColor: "#CDB4DB", subEvents: [{ title: "First Career Dream", text: "Thought I’d become an astronaut." }] },
    { year: "2020", title: "Challenges Met", text: "The pandemic brought challenges, but I found ways to grow.", photo: "images/2020.jpg", themeColor: "#FFABAB", subEvents: [{ title: "Biggest Skill Learned", text: "Mastered baking bread." }] },
    { year: "2021", title: "Reconnecting", text: "Reuniting with friends and family was like breathing fresh air again.", photo: "images/2021.jpg", themeColor: "#FFE6A7", subEvents: [{ title: "Best Moment", text: "A group hangout that felt like old times." }] },
    { year: "2022", title: "Focused Growth", text: "This year, I started to take life and goals more seriously.", photo: "images/2022.jpg", themeColor: "#B9FBC0", subEvents: [{ title: "Achievement", text: "Learned to code!" }] },
    {
        year: "2023",
        title: "The Year of Love",
        text: "This year changed my life. I met someone truly special.",
        photo: "images/2023.jpg",
        themeColor: "#FFCCD2",
        subEvents: [
            { title: "Summer of 2023", text: "The summer that brought us together. Her smile made everything better." },
            { title: "First Date", text: "Shared stories, laughs, and endless connection." },
            { title: "First Adventure Together", text: "Explored a new city, and it was unforgettable." }
        ]
    },
    { year: "2024", title: "Big Plans Ahead", text: "Setting the stage for something amazing.", photo: "images/2024.jpg", themeColor: "#CAF0F8", subEvents: [{ title: "Goal", text: "Travel to a new country." }] },
    { year: "2025", title: "Future Bright", text: "Looking ahead with excitement for what’s to come.", photo: "images/2025.jpg", themeColor: "#9D79BC", subEvents: [{ title: "Next Big Step", text: "Moving into adulthood with confidence." }] },
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
    yearText.innerHTML = text;
    yearPhoto.src = photo;
    document.body.style.backgroundColor = themeColor;

    const subEventContainer = document.createElement("div");
    subEventContainer.classList.add("sub-events");

    if (subEvents) {
        subEvents.forEach(({ title, text }) => {
            const subEvent = document.createElement("div");
            subEvent.classList.add("sub-event");
            subEvent.innerHTML = `<h4>${title}</h4><p>${text}</p>`;
            subEventContainer.appendChild(subEvent);
        });
    }

    yearText.appendChild(subEventContainer);

    document.querySelectorAll(".timeline-year").forEach((el, i) => {
        el.classList.toggle("selected", i === index);
        el.style.transform = i === index ? "scale(1.3)" : "scale(1)";
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
