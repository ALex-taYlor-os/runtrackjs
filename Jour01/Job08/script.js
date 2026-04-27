// Les mois dans le format Date commence à partir de 0 donc Janvier = 0
function IsPremier(nombre) {
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


function Somme(nombre1, nombre2){
  if(IsPremier(nombre1) && IsPremier(nombre2)){
    return nombre1+nombre2;
  }else{
    return false;
  }
}
    

console.log(Somme(7,5));//Je devrais avoir  12 comme résultat
console.log(Somme(6,5));// Je devrais rien avoir
