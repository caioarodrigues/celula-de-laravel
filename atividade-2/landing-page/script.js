const caminhoJSON = './produtos.json';
const todosCelulares = document.querySelector('.todos-celulares');

async function getData(){
    const resultado = await fetch(caminhoJSON)
        .then(res => res.json())
        .catch(err => alert(`erro: ${err.message}`));
        
    return resultado;
}

function criaEspacoCelular(celular = {}){
    const { produto, preco, vendedor, estrelas, imagens } = celular;
    const imgPrincipal = imagens.principal;
    const variacoesImg = imagens.variacoes;
    const parcelas = preco / 12;
    
    const divInformacoes = document.createElement('div');
    const divImgCelular = document.createElement('div');
    const divPrincipal = document.createElement('div');
    const sectionVariacoesImgs = document.createElement('section');
    const imgCelular = document.createElement('img');
    const titulo = document.createElement('h3');
    const vendedorElem = document.createElement('p');
    const precoElem = document.createElement('p');
    const parcelasElem = document.createElement('p');
    const estrelasElem = document.createElement('p');

    divPrincipal.setAttribute('class', 'celular');
    divImgCelular.setAttribute('id', 'img-celular');
    divInformacoes.setAttribute('id', 'informacoes-celular');
    vendedorElem.setAttribute('id', 'vendedor');
    parcelasElem.setAttribute('id', 'parcelas');
    sectionVariacoesImgs.setAttribute('class', 'variacoes');
    precoElem.setAttribute('id', 'preco');
    imgCelular.src = imgPrincipal;
    titulo.innerText = produto;
    vendedorElem.innerText = vendedor;
    precoElem.innerText = `R$ ${preco}`;
    parcelasElem.innerText = `Em 12x de ${parcelas.toFixed(2)}`;
    estrelasElem.innerHTML = estrelas + ' estrelas';

    variacoesImg.forEach(src => {
        const _img = document.createElement('img');

        _img.src = src;
        sectionVariacoesImgs.appendChild(_img);
    });

    divImgCelular.appendChild(imgCelular);
    divInformacoes.appendChild(titulo);
    divInformacoes.appendChild(vendedorElem);
    divInformacoes.appendChild(precoElem);
    divInformacoes.appendChild(parcelasElem);
    divInformacoes.appendChild(estrelasElem);

    divInformacoes.appendChild(sectionVariacoesImgs);

    divPrincipal.appendChild(divImgCelular);
    divPrincipal.appendChild(divInformacoes);
   /*  divPrincipal.appendChild(sectionVariacoesImgs); */
    todosCelulares.appendChild(divPrincipal);
}

(async () => {
    const celulares = await getData();
    
    celulares.forEach(celular => {
        criaEspacoCelular(celular);
    });
})();

