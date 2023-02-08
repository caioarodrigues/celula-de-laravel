function exibeConteudo(id){
    const elemento = document.querySelector(`#${id}`);

    elemento.setAttribute('id', 'visivel');
    elemento.style.display = 'flex';
}

function escondeConteudo(){
    const conteudoVisivel = Array.from(document.querySelectorAll('#visivel'));

    if(!conteudoVisivel) return;

    conteudoVisivel.forEach(conteudo => {
        conteudo.removeAttribute('visivel');
        conteudo.style.display = 'none';
    });
}

Array.from(document.querySelectorAll('.menu')).forEach(menu => {
    menu.onclick = e => {
        const classe = e.target
            .className.split(' ')[1];

        escondeConteudo();
        exibeConteudo(classe);
    }
});