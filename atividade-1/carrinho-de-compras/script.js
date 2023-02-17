const resumoCompras = [];

document.querySelector('#somatorio').innerHTML = 0;

function atualizaSomatorio(produto){
    function atualizaValor(){
        const somatorio = document.querySelector('#somatorio');
        let soma = 0;
        
        resumoCompras.forEach(({ preco, quantidade }) => {
            soma += preco * quantidade;
        });
        
        somatorio.innerHTML = soma.toFixed(2);
    }

    const isProdutoRepetido = !!resumoCompras.find(el => {
        const { nome, preco, quantidade } = el;

        return nome === produto.nome 
            && preco === produto.preco
            && quantidade === produto.quantidade;
    });
    
    if(isProdutoRepetido){
        const index = resumoCompras.indexOf(produto);
        
        if(index === -1) return;

        resumoCompras.splice(index, 1);
    }
    
    resumoCompras.push(produto);
    atualizaValor();
}

function atualizaPrecoUnitario(){

}

document.querySelectorAll('#quantidade').forEach(select => {
    for(let i = 1; i <= 5; i++){
        const op = document.createElement('option');
        op.innerHTML = i;
    
        select.appendChild(op);
    }
});

document.querySelectorAll('#add-carrinho').forEach(elem => {
    elem.onclick = event => {
        const quantidade = parseInt(event.target.parentElement.querySelector('select').value);
        const preco = parseFloat(elem.attributes['preco'].value);
        const nome = event.target.parentElement.querySelector('h1').innerText;
        const produto = { nome, preco, quantidade };

        atualizaSomatorio(produto);
    }
});

document.querySelectorAll('select').forEach(elem => {
    elem.onclick = e => {
        const precoSingular = e.target.parentElement.parentNode;

        atualizaPrecoUnitario();
    }
})