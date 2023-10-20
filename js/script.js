// Visualizzare in pagina 5 numeri casuali. 
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const result = document.getElementById('result');
const btn = document.querySelector('button');
const text = document.querySelector('p');
const input = document.querySelectorAll('input');
const finalResult = document.getElementById('text');
const delay = 3000;
const toGenNum = 5;

setTimeout(timer, delay);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let genNumbers = [];

while(genNumbers.length < toGenNum){

    let rndNumber = getRndInteger(1, 100);

    if(!genNumbers.includes(rndNumber)){
        genNumbers.push(rndNumber);
    }   
        result.innerHTML = genNumbers;
        console.log(genNumbers);
}

function timer(){
    result.classList.add('d-none');
    text.classList.remove('d-none');
    inputWrapper.classList.remove('d-none');
}

btn.addEventListener('click', function(){
    
    
    let inputValue = [];
    let resultArray = [];
    let counter = 0; 

    for(let i = 0; i < input.length; i++){
        if(!isNaN(parseInt(input[i].value))){
            inputValue.push(parseInt(input[i].value));
        }

        if(genNumbers[i] === inputValue[i]){
            resultArray.push(inputValue[i]);
            counter++;
        }
    
    }

    if(resultArray.length === toGenNum){
        finalResult.innerHTML = 'hai vinto!';
    } else if(counter === 0){
        finalResult.innerHTML = 'hai perso!, non hai indovinato nessun numero!';
    } else {
        finalResult.innerHTML = 'hai indovinato solo: ' + ' ' + counter + ' '+ ', i tuoi numeri: ' + resultArray;
    }

})

