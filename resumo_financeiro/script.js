
function calcula_lucro_diario() {
   
    const venda_diaria = 200;
    const despesa_diaria = 50; 
    const lucro_diario = venda_diaria - despesa_diaria;

    return {
        lucro: lucro_diario.toFixed(2),
        despesa: despesa_diaria.toFixed(2)
    };
}

function calcula_lucro_mensal() {
    
    const venda_mensal = 6200;
    const despesa_mensal = 1550; 
    const lucro_mensal = venda_mensal - despesa_mensal;

    return {
        lucro: lucro_mensal.toFixed(2),
        despesa: despesa_mensal.toFixed(2)
    };
}

const resumodiario = calcula_lucro_diario();
document.getElementById('lucro_diario').textContent = `Lucro: R$ ${resumodiario.lucro}`;
document.getElementById('despesa_diaria').textContent = `Despesas: R$ ${resumodiario.despesa}`;

const resumomensal = calcula_lucro_mensal();
document.getElementById('lucro_mensal').textContent = `Lucro: R$ ${resumomensal.lucro}`;
document.getElementById('despesa_mensal').textContent = `Despesas: R$ ${resumomensal.despesa}`;

