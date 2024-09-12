function armazenar() {
    const mensagemInput = document.getElementById('mensagemInput');
    const mensagem = mensagemInput.value;

    localStorage.setItem('mensagem', mensagem);
    alert('Mensagem armazenada!');
};

