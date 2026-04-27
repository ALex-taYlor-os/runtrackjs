// Les mois dans le format Date commence à partir de 0 donc Janvier = 0
const joursferies = [
  new Date(2024, 0, 1),   // 1er Janvier
  new Date(2024, 3, 1),   // 1er Avril
  new Date(2024, 7, 1),   // 1er Août
  new Date(2024, 4, 8),   // 8 Mai
  new Date(2024, 4, 9),   // 9 Mai
  new Date(2024, 4, 20),   // 20 Mai
  new Date(2024, 7, 15),   // 15 août
  new Date(2024, 10, 1),   // 1 novembre
  new Date(2024, 10, 11),   // 11 novembre
  new Date(2024, 11, 25),   // 25 decembre

];

const weekends = ["samedi", "dimanche"];

function jourTravaille(date) {
  const longDate = date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Vérifie si c'est un jour férié
  const estFerie = joursferies.some(f =>
    f.getDate() === date.getDate() &&
    f.getMonth() === date.getMonth()
  );

  if (estFerie) {
    console.log(`Le ${longDate} est un jour férié`);
    return;
  }

  // Vérifie si c'est un week-end
  const jourSemaine = date.toLocaleDateString('fr-FR', { weekday: 'long' });

  if (weekends.includes(jourSemaine)) {
    console.log(`Non, ${longDate} est un week-end`);
  } else {
    console.log(`Oui, ${longDate} est un jour travaillé`);
  }
}

// Tests (résultat attendu)
jourTravaille(new Date(2022, 0, 1));   // → Le samedi 1 janvier 2022 est un jour férié
jourTravaille(new Date(2022, 5, 9));   // → Oui, jeudi 9 juin 2022 est un jour travaillé
jourTravaille(new Date(2022, 5, 25));  // → Non, samedi 25 juin 2022 est un week-end