document.querySelectorAll('.javascript').forEach(el => {
    el.addEventListener('click', (e) => {
        // om du inte vill att klick inne i back/front ska bubblas och stänga, använd stopPropagation etc.
        el.classList.toggle('flipped');
    });
});

document.getElementById('zaida-img').addEventListener('dblclick', function () {
    const url = 'https://github.com/zaida-wiss'; // byt till önskad länk
    const message = 'Besök min GitHub:\n' + url + '\n\nKlicka OK för att öppna länken i en ny flik.';
    if (confirm(message)) {
        window.open(url, '_blank', 'noopener');
    }
});