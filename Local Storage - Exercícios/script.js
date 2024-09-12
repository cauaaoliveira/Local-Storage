function armazenar(){
    let valorArmazenado = document.getElementById('numero').value;
    localStorage.setItem('number', valorArmazenado);
}
console.log('Número armazenado 👍')
