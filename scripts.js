document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    function changeTab(event) {
        if (this.id !== 'cv-link') {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            sections.forEach(section => {
                section.style.display = 'none';
            });

            document.getElementById(targetId).style.display = 'block';

            links.forEach(link => {
                link.classList.remove('active');
            });

            this.classList.add('active');
        }
    }

    links.forEach(link => {
        link.addEventListener('click', changeTab);
    });

    // Show About Me section by default
    document.getElementById('about').style.display = 'block';
    links[0].classList.add('active');
});
