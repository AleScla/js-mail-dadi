console.log('js funziona');

const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    const randomNMB = Math.floor((Math.random() * 6) + 1);
    console.log(randomNMB);

    const randomNMB2 = Math.floor((Math.random() * 6) + 1);
    console.log(randomNMB2);

    document.getElementById('pc').innerHTML = randomNMB;
    document.getElementById('utente').innerHTML = randomNMB2;
    
    if (randomNMB < randomNMB2){
        console.log('USER WINS');
        document.getElementById('result').innerHTML = ('USER WINS!')
    }
    
    else if (randomNMB == randomNMB2){
        console.log('pareggio');
        document.getElementById('result').innerHTML = ('TIE!')
    }
    else{
        console.log('PC WINS!');
        document.getElementById('result').innerHTML = ('PC WINS!')
    }
})