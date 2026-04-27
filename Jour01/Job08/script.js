// Les mois dans le format Date commence à partir de 0 donc Janvier = 0
function EstPremier(nombre) {
    if(nombre==0 || nombre==1) {
    return false;
  }

  for(let i=2;i<nombre;i++){
    if(nombre%i==0){
      return false;
    }
  }
    return true;
} 


function sommeNombresPremiers(nombre1, nombre2){
  if(EstPremier(nombre1) && EstPremier(nombre2)){
    return nombre1+nombre2;
  }else{
    return false;
  }
}
    

console.log(sommeNombresPremiers(7,5));//Je devrais avoir  12 comme résultat
console.log(sommeNombresPremiers(6,5));// Je devrais rien avoir
