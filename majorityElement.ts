function majorityElement(nums: number[]): number {
    let moda = 0;
    const tamanho = nums.length;
    const frequenciaDesejada = Math.floor((tamanho)/2);

    let valorModa = 0;

    if(tamanho == 1)
    {
        valorModa = nums[0];
    }
    
    else
    {
        for (let i = 0; i< tamanho; i++)
        {
            for(let j = 0; j < tamanho; j++)
            {
                if(nums[i] == nums[j])
                {
                    moda ++;

                    if(moda > frequenciaDesejada)
                    {
                        return nums[i]
                    }
                }
            }
            moda = 0
        }
    }

    return valorModa;
};