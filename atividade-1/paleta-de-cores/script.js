function alteraCor(e){
    const cor = e.target.className.split(' ')[1];
    document.querySelector('#resultado').style.backgroundColor = cor;
}