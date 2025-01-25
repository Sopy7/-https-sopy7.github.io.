// Universities Data (50 entries)
const universities = [
    {
        name: "Stanford University",
        image: "https://via.placeholder.com/150",
        link: "https://www.stanford.edu",
        admissionRate: "4%",
        location: "California, USA",
        cost: "$53,529 per year",
        timeToDegree: "4 years",
        description: "World-renowned for technology, engineering, and business programs. Located in the heart of Silicon Valley.",
    },
    {
        name: "University of Oxford",
        image: "https://via.placeholder.com/150",
        link: "https://www.ox.ac.uk",
        admissionRate: "17%",
        location: "Oxford, England",
        cost: "£9,250 (UK students), £26,770–£37,510 (international students)",
        timeToDegree: "3-4 years",
        description: "Oldest university in the English-speaking world, offering diverse programs and prestigious global recognition.",
    },
    {
        name: "Harvard University",
        image: "https://via.placeholder.com/150",
        link: "https://www.harvard.edu",
        admissionRate: "5%",
        location: "Massachusetts, USA",
        cost: "$52,659 per year",
        timeToDegree: "4 years",
        description: "Ivy League university famous for law, medicine, and business. Provides extensive financial aid opportunities.",
    },
    // Add 47 more entries in a similar structure...
    {
        name: "University of Melbourne",
        image: "https://via.placeholder.com/150",
        link: "https://www.unimelb.edu.au",
        admissionRate: "38%",
        location: "Melbourne, Australia",
        cost: "AUD 30,000–$40,000 per year",
        timeToDegree: "3 years (bachelor's), 2 years (master's)",
        description: "Australia’s leading university with a strong focus on research and global collaboration.",
    },
    {
        name: "ETH Zurich",
        image: "https://via.placeholder.com/150",
        link: "https://ethz.ch",
        admissionRate: "27%",
        location: "Zurich, Switzerland",
        cost: "$1,500 per year",
        timeToDegree: "3 years (bachelor's), 2 years (master's)",
        description: "Premier university for science, engineering, and technology, located in Zurich with affordable tuition.",
    },
];

// Initial Content
document.addEventListener("DOMContentLoaded", () => {
    showLandingPage();
    setupThemeToggle();
});

// Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
    });
}

// Landing Page
function showLandingPage() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="landing-page">
            <h2>Welcome to University Finder</h2>
            <p>Discover the best universities tailored to your needs. Take our quiz to get personalized recommendations or search for specific universities.</p>
            <a href="#" onclick="showQuizPage()">Take the Quiz</a>
            <a href="#" onclick="showSearchPage()">Search a University</a>
        </div>
    `;
}

// Quiz Page
function showQuizPage() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="test-section">
            <h2>University Finder Quiz</h2>
            <form id="quizForm">
                <div class="question">
                    <label>What is your preferred field of study?</label>
                    <input type="text" id="field" required>
                </div>
                <div class="question">
                    <label>Preferred location (e.g., country, state)?</label>
                    <input type="text" id="location" required>
                </div>
                <div class="question">
                    <label>Maximum annual tuition cost?</label>
                    <input type="text" id="budget" required>
                </div>
                <button type="button" onclick="processQuiz()">Submit Quiz</button>
            </form>
        </div>
    `;
}

// Search Page
function showSearchPage() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="test-section">
            <h2>Search for a University</h2>
            <input type="text" id="searchInput" placeholder="Enter university name or keyword...">
            <button onclick="searchUniversities()">Search</button>
            <div id="results" class="results"></div>
        </div>
    `;
}

// Process Quiz
function processQuiz() {
    const field = document.getElementById("field").value.toLowerCase();
    const location = document.getElementById("location").value.toLowerCase();
    const budget = parseFloat(document.getElementById("budget").value.replace(/[^0-9.-]+/g, ""));

    const filteredUniversities = universities.filter((uni) =>
        (uni.description.toLowerCase().includes(field) || uni.location.toLowerCase().includes(location)) &&
        (!isNaN(budget) ? parseFloat(uni.cost.replace(/[^0-9.-]+/g, "")) <= budget : true)
    );

    displayResults(filteredUniversities);
}

// Search Functionality
function searchUniversities() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredUniversities = universities.filter(
        (uni) =>
            uni.name.toLowerCase().includes(query) ||
            uni.description.toLowerCase().includes(query) ||
            uni.location.toLowerCase().includes(query)
    );

    displayResults(filteredUniversities);
}

// Display Results
function displayResults(universities) {
    const resultsDiv = document.getElementById("results") || document.getElementById("content");
    resultsDiv.innerHTML = universities.length
        ? universities
              .map(
                  (uni) => `
                <div class="university-card">
                    <img src="${uni.image}" alt="${uni.name}">
                    <div class="info">
                        <h3>${uni.name}</h3>
                        <p><strong>Location:</strong> ${uni.location}</p>
                        <p><strong>Cost:</strong> ${uni.cost}</p>
                        <p><strong>Time to Degree:</strong> ${uni.timeToDegree}</p>
                        <p><strong>Admission Rate:</strong> ${uni.admissionRate}</p>
                        <p>${uni.description}</p>
                        <a href="${uni.link}" target="_blank">Visit Website</a>
                    </div>
                </div>
            `
              )
              .join("")
        : "<p>No universities found. Please refine your search.</p>";
}
