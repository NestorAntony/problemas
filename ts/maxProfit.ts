function maxProfit(prices: number[]): number {
    let resposta = 0;
    let menorValor = prices[0];

    let diferenca = 0;

    const tamVetor = prices.length;
    for(let i=0; i<tamVetor; i++)
    {
        const precoAtual = prices[i] - menorValor;
        if(prices[i] < menorValor)
        {
            menorValor = prices[i]
        }

        if(precoAtual > diferenca)
        {
            diferenca = precoAtual;
        }
    }

    return diferenca;
};