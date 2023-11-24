

const produto = document.getElementById('produto');
const produtoList = document.getElementById('produtoList');

function addProduct() {
    const nome = document.getElementById('nome').value;
    const custo = document.getElementById('custo').value;
    const venda = document.getElementById('venda').value;
   
    if (nome && custo && venda) {
        const produtoItem = document.createElement('div');
        produtoItem.innerHTML = `<strong>${nome}</strong> - Custo: R$${custo} - Venda: R$${venda}`;
        produtoList.appendChild(produtoItem);   
        produto.reset();
        
    } else {
        alert('Preencha todos os campos.');
    }
}