function removeElement(nums: number[], val: number): number 
{
    const tamanho = nums.length;
    let contagem = 0;
    let j = 0;

    for(let i=0; i< tamanho; i++)
    {
        if(nums[i] != val)
        {
            nums[j] = nums[i];
            contagem ++;
            j++;
        }
    }

    return contagem;
};