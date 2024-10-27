// Add any interactive functionality here
document.addEventListener('DOMContentLoaded', (event) => {
    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.getElementById("downloadBtn").addEventListener("click", () => {
    window.print();
});
