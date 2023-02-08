function trocaImagemDisplay(src){
    const _display = document.querySelector('.display');

    if(!_display.style.display)
        _display.style.display = 'flex';

    document.querySelector('#imagem-atual')
        .src = src;
}

document.querySelectorAll('.container img').forEach(img => {
    img.onmouseenter = e => {
        const src = e.target.src;

        trocaImagemDisplay(src)
    }
});