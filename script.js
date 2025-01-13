/*
   🦜 PARROT SIGNATURE 🦜

   Crafted with 🖤 by sopy


*/

const years = [
    { year: "2009", title: "A Star is Born", text: "The world changed forever when I arrived. A bright start to a big journey!", photo: "images/2009.jpg", themeColor: "#FFC1A1" },
    { year: "2010", title: "Tiny Explorer", text: "I started walking, talking, and making tiny adventures all my own.", photo: "images/2010.jpg", themeColor: "#FDEAA8" },
    { year: "2011", title: "First Words", text: "This year was full of firsts—especially saying 'mama' and 'dada'.", photo: "images/2011.jpg", themeColor: "#B8E2D0" },
    { year: "2012", title: "Playful Times", text: "Imagination ruled everything—building forts, playing pretend, and endless laughter.", photo: "images/2012.jpg", themeColor: "#ADD8F6" },
    { year: "2013", title: "Growing Bigger", text: "Life felt like a big playground, and I was ready to take on the swings and slides.", photo: "images/2013.jpg", themeColor: "#D7BBF6" },
    { year: "2014", title: "Learning the Basics", text: "ABCs, 123s, and all the little things that started making sense.", photo: "images/2014.jpg", themeColor: "#FFD6E0" },
    { year: "2015", title: "First Day of School", text: "Walking into school with a head full of dreams—and maybe a little fear.", photo: "images/2015.jpg", themeColor: "#FF9AA2" },
    { year: "2016", title: "Discovering Hobbies", text: "I started exploring what I loved—sports, art, and all kinds of fun stuff.", photo: "images/2016.jpg", themeColor: "#FBE4C3" },
    { year: "2017", title: "Creative Spark", text: "Painting, drawing, and learning how to turn ideas into something cool.", photo: "images/2017.jpg", themeColor: "#B5EAEA" },
    { year: "2018", title: "Adventurous Spirit", text: "Family trips and exploring nature brought so much excitement and fun.", photo: "images/2018.jpg", themeColor: "#A2D2FF" },
    { year: "2019", title: "Big Dreams", text: "Thinking about what I want to be and figuring out my big dreams.", photo: "images/2019.jpg", themeColor: "#CDB4DB" },
    { year: "2020", title: "Challenges Met", text: "The pandemic made life weird, but I kept going with resilience and hope.", photo: "images/2020.jpg", themeColor: "#FFABAB" },
    { year: "2021", title: "Reconnecting", text: "Getting back to life, seeing friends again, and appreciating the little things.", photo: "images/2021.jpg", themeColor: "#FFE6A7" },
    { year: "2022", title: "Focused Growth", text: "I started to take things seriously—working on myself and my goals.", photo: "images/2022.jpg", themeColor: "#B9FBC0" },
    {
        year: "2023",
        title: "The Year of Love",
        text: "The summer of 2023 changed everything. I met someone who truly matters—my girlfriend.",
        photo: "images/2023.jpg",
        themeColor: "#FFCCD2",
        subEvents: [
            {
                title: "Summer of 2023",
                text: "That moment when everything clicked. We laughed, talked, and made unforgettable memories together.",
                photo: "images/summer2023.jpg",
            },
        ],
    },
    { year: "2024", title: "Big Plans Ahead", text: "Preparing for the next chapter. Everything feels full of potential.", photo: "images/2024.jpg", themeColor: "#CAF0F8" },
    { year: "2025", title: "Future Bright", text: "The future looks limitless. I'm ready for whatever comes next.", photo: "images/2025.jpg", themeColor: "#9D79BC" },
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

    if (subEvents) {
        const subEvent = subEvents[0];
        const subEventText = document.createElement("p");
        subEventText.textContent = `✨ ${subEvent.title}: ${subEvent.text}`;
        yearText.appendChild(subEventText);
    }

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


