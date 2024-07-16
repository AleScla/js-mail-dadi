console.log('js funziona');

const randomNMB = Math.floor((Math.random() * 6) + 1);
console.log(randomNMB);

const randomNMB2 = Math.floor((Math.random() * 6) + 1);
console.log(randomNMB2);

document.getElementById('pc').innerHTML = randomNMB;
document.getElementById('utente').innerHTML = randomNMB2;

if (randomNMB < randomNMB2){
    console.log('pc vince');
    
}

else if (randomNMB == randomNMB2){
    console.log('pareggio');
}
else{
    console.log('user vince');
}