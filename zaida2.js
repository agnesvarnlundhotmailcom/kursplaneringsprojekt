// Hämta alla element med klassen 'card' och lagra dem i en lista (NodeList)
const cards = document.querySelectorAll('.card');

// Loopar igenom varje 'card' i listan
cards.forEach(card => {

  // Lägger till en händelselyssnare på varje kort som reagerar på klick
  card.addEventListener('click', () => {

    // Letar upp det kort som för tillfället har klassen 'active'
    const active = document.querySelector('.card.active');

    // Om det finns ett aktivt kort OCH det inte är samma kort som vi just klickade på...
    if (active && active !== card) {
      // ...så tar vi bort klassen 'active' från det andra kortet
      active.classList.remove('active');
    }

    // Växlar 'active'-klassen på det kort vi klickade på (lägger till om den saknas, tar bort om den finns)
    card.classList.toggle('active');
  });
});