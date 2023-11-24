
function calculateDailyProfit() {
   
    const dailySales = 150;
    const dailyExpenses = 50; 
    const dailyProfit = dailySales - dailyExpenses;

    return {
        profit: dailyProfit.toFixed(2),
        expenses: dailyExpenses.toFixed(2)
    };
}

function calculateMonthlyProfit() {
    
    const monthlySales = 600;
    const monthlyExpenses = 200; 
    const monthlyProfit = monthlySales - monthlyExpenses;

    return {
        profit: monthlyProfit.toFixed(2),
        expenses: monthlyExpenses.toFixed(2)
    };
}

const dailySummary = calculateDailyProfit();
document.getElementById('dailyProfit').textContent = `Lucro: R$ ${dailySummary.profit}`;
document.getElementById('dailyExpenses').textContent = `Despesas: R$ ${dailySummary.expenses}`;

const monthlySummary = calculateMonthlyProfit();
document.getElementById('monthlyProfit').textContent = `Lucro: R$ ${monthlySummary.profit}`;
document.getElementById('monthlyExpenses').textContent = `Despesas: R$ ${monthlySummary.expenses}`;
