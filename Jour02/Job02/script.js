let bouton = document.querySelector('button');

function showhide(){
    
    if (document.getElementById("ArticleShowHide") !== null) { //Si mon article existe
     document.getElementById('ArticleShowHide').remove();

    }else {

        let monarticleShowHide = document.createElement("article");

        monarticleShowHide.textContent="L'important n'est pas la chute, mais l'atterrissage.";

        monarticleShowHide.setAttribute("id","ArticleShowHide");

        document.body.appendChild(monarticleShowHide);
    }
    
};


bouton.addEventListener('click', showhide); // En mettant citation() avec les parenthèses, tu appelles la fonction tout de suite au lieu de la passer comme callback. Sans les (), tu donnes la fonction à exécuter au moment du clic.

