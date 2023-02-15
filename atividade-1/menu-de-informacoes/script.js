let anterior;

function exibeConteudo(id){
    const elemento = document.querySelector(`#${id}`);

    elemento.setAttribute('class', 'visivel');
    elemento.style.display = 'flex';
}

function escondeConteudo(classe){
    const conteudoVisivel = document.querySelectorAll('.visivel');

    conteudoVisivel.forEach(conteudo => {
        conteudo.style.display = 'none';
    });
}

document.querySelectorAll('.menu').forEach(menu => {
    menu.onclick = e => {
        const classe = e.target
            .className.split(' ')[1];

        escondeConteudo(classe);

        if(classe === anterior){
            anterior = null;

            return;
        }

        exibeConteudo(classe);

        anterior = classe;
    }
});