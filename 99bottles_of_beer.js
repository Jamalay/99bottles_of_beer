function oneCouplet(number) {
    let bottle_word = 'бутылок';
    let sec_bottle_word = 'бутылок';
    let lastSentence = '';
    if ((number % 10 === 1) && (number !== 11)){
        bottle_word = 'бутылка';
    }
    else if ((number - 1) % 10 === 1 && (number - 1) !== 11){
        sec_bottle_word = 'бутылка';
    }
    else if(((number - 1) === 12 || (number - 1) === 13 || (number - 1) === 14)){
        sec_bottle_word = 'бутылок';
    }
    else if (((number - 1) % 10 === 2 || (number - 1) % 10 === 3 || (number - 1) % 10 === 4)){
        sec_bottle_word = 'бутылки';
    }
    if (number === 12 || number === 13 || number === 14){
        bottle_word = 'бутылок';
    }
    else if ((number % 10 === 2 || number % 10 === 3 || number % 10 === 4)){
        bottle_word = 'бутылки';
    }
    if (number - 1 === 0){
        lastSentence = 'нет бутылок пива!';
    }
    if (number - 1 > 0){
        lastSentence = `${number - 1} ${sec_bottle_word} пива на стене!`
    }
    
    console.log(`${number} ${bottle_word} пива на стене, ${number} ${bottle_word} пива!`);
    console.log(`Возьми одну, пусти по кругу, ${lastSentence}`);
}



function printPoem(){
    for (let i = 99; i > 0; i--){
        oneCouplet(i);
        console.log('');
    }
}

printPoem();
