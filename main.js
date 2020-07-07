//Java code
"use strict";

document.getElementById('button').addEventListener('click',change);


function change() {
    //all variables that user inputs
    let noun1 = document.getElementById('input1').value;
    let pnoun1 = document.getElementById('input2').value;
    let verb1 = document.getElementById('input3').value;
    let verb2 = document.getElementById('input4').value;
    let pbody = document.getElementById('input5').value;
    let adj1 = document.getElementById('input6').value;
    let pnoun2 = document.getElementById('input7').value;
    let adj2 = document.getElementById('input8').value;

    console.log(noun1);

    document.getElementById('strong1').innerHTML = noun1;
    document.getElementById('strong2').innerHTML = pnoun1;
    document.getElementById('strong3').innerHTML = verb1;
    document.getElementById('strong4').innerHTML = verb2;
    document.getElementById('strong5').innerHTML = pbody;
    document.getElementById('strong6').innerHTML = adj1;
    document.getElementById('strong7').innerHTML = pnoun2;
    document.getElementById('strong8').innerHTML = adj2;

}