const todosCelulares = document.querySelector('.todos-celulares');

async function getData(){
    const url = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7d734c77-7d4c-4e60-b2c8-a132e4445dca/produtos.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230207T190810Z&X-Amz-Expires=86400&X-Amz-Signature=a624b051ef24a6d290b7eba1f24d7ba2ac238563e99a8d18e4ec3b06c7f6923c&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22produtos.json%22&x-id=GetObject';
    const resultado = await fetch(url)
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

