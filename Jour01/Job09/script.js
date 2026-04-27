
function tri(numbers,order) {

  switch (order) {
  case "asc":
    
    numbers.sort((a, b) => a - b); //tri croissant
    return numbers;

  case "desc":
    numbers.sort((a, b) => b - a); //tri décroissant
    return numbers;
  default:
    console.log(`Désole, veuillez rentrer des valeurs valides pour le tri ${order}.`);
  }
}

tableauNombre= [4,3,9,7,2];

let methode = "asc";
console.log(tri(tableauNombre,"asc"));
console.log(tri(tableauNombre,"desc"));