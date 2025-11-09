function removeDuplicates(nums: number[]): number 
{
    const tamanho = nums.length;//talvez eu erre aqui
    let unicos = 0;
    let indice = 0;
    let j = 1;

    for(let i=0; i<tamanho; i++)
    {
        j = i+1
        if (nums[i] == nums[j])
        {
            nums[indice] = nums[i];
            indice++;

            unicos++;

            while(nums[i] == nums[j])
            {
                j++;
            }


            i += (j-i)-1;
        }
        else
        {
            nums[indice] = nums[i];
            indice++;

            unicos++;
        }
    }

    return unicos;
};