console.log('js funziona');

const form = document.querySelector('form');
const whitelist = ['ale@gmail.com', 'alessandro@gmail.com', 'aleale@gmail.com', 'alescla@gmail.com'];
form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('tasto verifica premuto')

    const email = document.getElementById('email').value
    console.log(email)

    for(let i=0; i < whitelist.length; i++){
        console.log(whitelist[i])
        if (email == whitelist[i]) {
            console.log('passa')
            document.getElementById('result').innerHTML = 'Passato'
            i = whitelist.length;
        }
        else {
            console.log('non passa')
            document.getElementById('result').innerHTML = 'Non Passato'
        }
        
    }
})




