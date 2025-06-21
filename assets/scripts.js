const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("#menu a");

const lightCircle = document.getElementById('light-circle');

window.addEventListener('mousemove', (e) => {
    lightCircle.style.top = `${e.clientY}px`;
    lightCircle.style.left = `${e.clientX}px`;
});

function onScroll() {
    const scrollMargin = 150;
    let closestSection = null;
    let closestDistance = Infinity;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - scrollMargin);
        // Prendi la sezione più vicina al punto scrollMargin
        if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
        }
    });

    const current = closestSection ? closestSection.getAttribute("id") : null;

    navLinks.forEach(link => {
        link.classList.remove("text-green-400", "font-bold", "translate-x-4");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("text-green-400", "font-bold", "translate-x-4");
        }
    });
}


window.addEventListener("scroll", onScroll);
document.addEventListener("DOMContentLoaded", onScroll); // aggiorna all'inizio

window.addEventListener("pageshow", function () {
    window.scrollTo(0, 0);
});
