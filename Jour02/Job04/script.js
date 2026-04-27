//le focus c'est quand la zone de saisie est active 
//keylogger

const textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
  // Vérifie que c'est une lettre a-z
  if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
    
    // Si le focus EST dans le textarea → la lettre est ajoutée deux fois
    // (une fois par le navigateur naturellement, une fois par nous)
    if (document.activeElement === textarea) {
      textarea.value += event.key;
    } else {
      // Si le focus n'est PAS dans le textarea → on ajoute une fois
      textarea.value += event.key;
    }
  }
});