
function compterVoyelles(phrase){
  tabVoyelles=["a","i","o","u","e","y"];

  let count=0;  for(let lettres of phrase ){
    if(tabVoyelles.includes(lettres))
      count++;
  }
  if(count > 0){
    console.log("La phrase contient "+ count + " voyelles");
  }else{
    console.log("La phrase ne contient pas de voyelles");
  }
}

phrase = "Je n'aime pas LaPlateforme";
compterVoyelles(phrase);

