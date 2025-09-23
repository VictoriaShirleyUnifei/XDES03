const paisesDados = require('country-data');
require('@colors/colors');

const paisesInglesOficial = paisesDados.countries.all.filter(n => n.languages.includes('eng'));
 
for(let pais of paisesInglesOficial)
    console.log(pais.name.random);