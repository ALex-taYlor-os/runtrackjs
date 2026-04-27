let bouton = document.querySelector('button');

function citation(){
    console.log(document.getElementById("citation").textContent);
};


bouton.addEventListener('click', citation); // En mettant citation() avec les parenthèses, tu appelles la fonction tout de suite au lieu de la passer comme callback. Sans les (), tu donnes la fonction à exécuter au moment du clic.

