// Hämtar alla dragspelssektioner
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    // Stäng alla andra sektioner först
    accordionItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    // Växla aktiv klass på klickad sektion
    item.classList.toggle('active');
  });
});
