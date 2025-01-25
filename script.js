const universities = [
    {
        name: "Stanford University",
        image: "https://via.placeholder.com/150",
        link: "https://www.stanford.edu",
        admissionRate: "4%",
        specs: "Top engineering and business programs, located in California, USA.",
    },
    {
        name: "University of Oxford",
        image: "https://via.placeholder.com/150",
        link: "https://www.ox.ac.uk",
        admissionRate: "17%",
        specs: "World-renowned research institution, located in Oxford, England.",
    },
    {
        name: "University of Toronto",
        image: "https://via.placeholder.com/150",
        link: "https://www.utoronto.ca",
        admissionRate: "43%",
        specs: "Top Canadian university with diverse programs, located in Toronto, Canada.",
    },
    {
        name: "National University of Singapore",
        image: "https://via.placeholder.com/150",
        link: "https://www.nus.edu.sg",
        admissionRate: "27%",
        specs: "Asia’s leading global university, located in Singapore.",
    },
    {
        name: "ETH Zurich",
        image: "https://via.placeholder.com/150",
        link: "https://ethz.ch",
        admissionRate: "22%",
        specs: "Premier university for science and technology, located in Zurich, Switzerland.",
    },
    // Add more universities here...
];

function generateResults() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    universities.forEach((uni) => {
        const card = document.createElement("div");
        card.className = "university-card";

        card.innerHTML = `
            <img src="${uni.image}" alt="${uni.name}">
            <div class="info">
                <h3>${uni.name}</h3>
                <p>Admission Rate: ${uni.admissionRate}</p>
                <p>${uni.specs}</p>
                <a href="${uni.link}" target="_blank">Visit Website</a>
            </div>
        `;

        resultsDiv.appendChild(card);
    });
}
