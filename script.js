// Smooth Scroll Function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

// Dynamic Project Data
const projects = [
    {
        title: "Portfolio Website",
        desc: "Personal responsive portfolio using HTML, CSS, JS"
    },
    {
        title: "Weather App",
        desc: "Live weather using API integration"
    },
    {
        title: "To-Do App",
        desc: "Task manager with local storage"
    },
    {
        title: "Calculator",
        desc: "Basic calculator using JavaScript"
    }
];

// Load Projects Dynamically
const container = document.getElementById("projectContainer");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
    `;

    container.appendChild(card);
});

// Contact Form Interaction
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent Successfully!");
});

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.style.background = window.scrollY > 50 ? "#000" : "#111";
});