function bisextile(year){

    if ( (year%4==0 && year%100!=0) | (year%400==0) )
            return true;
    else
            return false;
    
}


let listYear = [2000,2004, 2008, 2023, 2024];

for (year of listYear){
    console.log(year)
    if(bisextile(year))
        console.log("L'année est bisextile")
    else    
         console.log("L'année est commune")
}
