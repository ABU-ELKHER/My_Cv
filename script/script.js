document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll to sections
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Download resume button action
    document.getElementById('downloadResume').addEventListener('click', function () {
        alert("Resume download feature coming soon!");
    });

    // View details for portfolio items
    const detailsButtons = document.querySelectorAll('.view-details');
    detailsButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert("Details coming soon!");
        });
    });
});
