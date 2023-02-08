const sufixos = [
    '@gmail.com', '@yahoo.com', '@hotmail.com'
];

const espacoResposta = document.querySelector('#resposta');

function escreveMensagemSucesso(){
    espacoResposta.innerHTML = 'email válido';
    espacoResposta.style.color = 'green';
}

function escreveMensagemErro(){
    espacoResposta.innerHTML = 'email inválido';
    espacoResposta.style.color = 'red';
}

function validar(e){
    const email = document.querySelector('#email').value;
    const resultado = sufixos.filter(s => email.includes(s)).length;
    const tamanhoSufucienteNome = email.split('@')[0].length > 3;

    e.preventDefault();

    if(!tamanhoSufucienteNome){
        escreveMensagemErro();

        return;
    }

    resultado && escreveMensagemSucesso();
    !resultado && escreveMensagemErro();
}