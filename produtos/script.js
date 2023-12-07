
const myHeaders = {
    "Content-Type": "application/json", 
  };
const produto = document.getElementById('produto');
const produtoList = document.getElementById('produtoList');

async function addProduct() {
    const nome = document.getElementById('nome').value;
    const custo = document.getElementById('custo').value;
    const venda = document.getElementById('venda').value;
    const produto = {
        nome:nome, preco_custo:custo, preco_venda:venda
    }
    const bodyJson = JSON.stringify(produto)
    const res = await fetch(
        "http://localhost:3001/produtos",
    { 
        
        headers:myHeaders, 
        method:"POST",
        body:bodyJson
    }
        )
        const resultado = await res.json()
        console.log(resultado)

    if (nome && custo && venda) {
        const produtoItem = document.createElement('div');
        produtoItem.innerHTML = `<strong>${nome}</strong> - Custo: R$${custo} - Venda: R$${venda}`;
        produtoList.appendChild(produtoItem);   
        produto.reset();
        
    } else {
        alert('Preencha todos os campos.');
    }
}