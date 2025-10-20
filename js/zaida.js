document.getElementById('Zaida').addEventListener('dblclick', function () {
    const url = 'https://github.com/zaida-wiss'; // byt till önskad länk
    const message = 'Besök min GitHub:\n' + url + '\n\nKlicka OK för att öppna länken i en ny flik.';
    if (confirm(message)) {
        window.open(url, '_blank', 'noopener');
    }
});