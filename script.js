document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.four_zero_four_bg h1');

    setInterval(() => {
        if (header.style.visibility === 'hidden') {
            header.style.visibility = 'visible';
        } else {
            header.style.visibility = 'hidden';
        }
    }, 500);  // Cambia el número para ajustar la velocidad del parpadeo
});
