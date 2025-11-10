function removeDuplicates2(nums: number[]): number {
    let indice = 0;
    let duplicata = 0;
    let j = 0;

    let valoresNoVetor = 0;

    const tamanho = nums.length


    const vector = new Array(tamanho)

    for(let k = 0; k<tamanho; k++){ //copiando nums para um vetor temporário.
        vector[k] = nums[k]
    }

    for(let i=0; i< tamanho; i++){
        j = i+1;

        if(vector[i] == vector[j]){
            duplicata ++;
            j++;

            while(vector[i] == vector[j]){
                duplicata++;
                j++;
            }
            let diferenca = j-i;

            if(diferenca > 1){
                for(let l = 0; l<2; l++){
                    nums[indice] = vector[i+l];
                    indice++;
                    valoresNoVetor++;
                }

                i = j-1;
            }
            else{
                nums[indice] = vector[i];
                indice++;
                nums[indice] = vector[j];
                indice++;

                valoresNoVetor = valoresNoVetor + 2;
            }
        }
        else{
            nums[indice] = vector[i];
            indice ++;
            valoresNoVetor++;
        }
        duplicata = 0;
    }
    return valoresNoVetor;
};