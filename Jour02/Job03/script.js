let bouton = document.querySelector('button');
let count = 0;



function addOne(){
    
    count++;
    document.getElementById("compteur").textContent=count;
    
};


bouton.addEventListener('click', addOne); // En mettant citation() avec les parenthèses, tu appelles la fonction tout de suite au lieu de la passer comme callback. Sans les (), tu donnes la fonction à exécuter au moment du clic.

