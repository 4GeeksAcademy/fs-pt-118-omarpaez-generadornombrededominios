import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};


let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = ['.com','.net', '.us', '.io']  // se crea un nuevo array con las posibles extensiones

let domainTable = [] // array que almacenara los nomres de dominios resultantes
let tableHtml=""

// se implementan 4 for of para cada uno de los arreglos que contiene las diferentes partes del nombre 
for (let valPronoun of pronoun) {
  for (let valAdj of adj) {
    for (let valNoun of noun) {
      for (let valExt of ext) {
       // console.log(valPronoun + valAdj + valNoun + valExt)
        domainTable.push(`${valPronoun}${valAdj}${valNoun}${valExt}`) //hacemo push por cada iteracion concatenando las diferentes combinaciones
       }
    }
  }
}

// con este for recorremos el array que contiene los nombres resultantes, para ir acumulando en una variable string, para pasarla a una tabla y poder verla en html
for(let i=0; i<domainTable.length; i++){
  tableHtml += `<tr><th>${i+1}</th><td>${domainTable[i]}</td></tr>`
}

//console.table(domainTable)
//console.log(tableHtml)


 let d = document
 d.getElementById("nameDomains").innerHTML = tableHtml