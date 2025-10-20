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


//footer//
<<<<<<< HEAD
document.getElementById('Fio').addEventListener('dblclick', function () {
    const url = 'https://github.com/FiorellaDiGiulio'; // byt till önskad länk
    const message = 'Hej! Besök min GitHub:\n' + url + '\n\nKlicka OK för att öppna länken i en ny flik.';
    if (confirm(message)) {
        window.open(url, '_blank', 'noopener');
    }
});
=======
document.getElementById("Fio").addEventListener("dblclick", () => {
    alert("Fio Github: https://github.com/FiorellaDiGiulio");
  });
>>>>>>> 5f112aeb3f43e3f31a82a01a752fc99edd4f650b
 
