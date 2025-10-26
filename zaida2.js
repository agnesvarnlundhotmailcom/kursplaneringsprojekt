// Hämta alla element med klassen 'card' och lagra dem i en lista (NodeList)
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const active = document.querySelector('.card.active');

    // Om ett annat kort redan är aktivt, stäng det
    if (active && active !== card) {
      active.classList.remove('active');
      active.classList.add('closing');
      // Vänta tills animationen är klar, ta bort 'closing'
      setTimeout(() => active.classList.remove('closing'), 600);
    }

    // Om samma kort klickas igen – stäng det
    if (card.classList.contains('active')) {
      card.classList.remove('active');
      card.classList.add('closing');
      setTimeout(() => card.classList.remove('closing'), 600);
    } else {
      // Annars – öppna det
      card.classList.add('active');
    }
  });
});