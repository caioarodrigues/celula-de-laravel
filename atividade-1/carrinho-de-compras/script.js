document.querySelector('#somatorio').innerHTML = 0;

function atualizaSomatorio(quantia){
    const somatorio = document.querySelector('#somatorio');
    const valorAntigo = parseFloat(somatorio.innerHTML);

    somatorio.innerHTML = (quantia + valorAntigo).toFixed(2);
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
        const quantidade = event.target.parentElement.querySelector('select').value;
        const preco = elem.attributes['preco'].value;
        const precoFinal = quantidade * preco;

        atualizaSomatorio(precoFinal);
    }
});

document.querySelectorAll('select').forEach(elem => {
    elem.onclick = e => {
        const precoSingular = e.target.parentElement.parentNode;

        console.log(precoSingular)
        atualizaPrecoUnitario();
    }
})