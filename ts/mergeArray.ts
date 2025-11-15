/**
 Do not return anything, modify nums1 in-place instead.
 */

// já recebe as metades organizadas (merge)
function merge(nums1: number[], m: number, nums2: number[], n: number): void 
{

    const ladoEsquerdo = new Array(m);
    const ladoDireito = new Array(n)

    for(let j = 0; j<m; j++){
        ladoEsquerdo[j] = nums1[j];
    }

    for(let k = 0; k<n; k++){
        ladoDireito[k] = nums2[k];
    }

    let i = 0;
    let esq = 0;
    let dir = 0;

    while(esq < m && dir < n)
    {
        if(ladoEsquerdo[esq] >= ladoDireito[dir])
        {
            nums1[i] = ladoDireito[dir];
            dir++;
            //i++;
        }

        else
        {
            nums1[i] = ladoEsquerdo[esq];
            esq++;
            //i++;
        }
        i++;
    }

    while(esq < m)
    {
        nums1[i] = ladoEsquerdo[esq];
        esq++;
        i++;
    }

    while(dir < n){
        nums1[i] = ladoDireito[dir];
        dir++;
        i++;
    }

};


/*function mergeSort(vetor: number[], esquerdo: number, direito: number): void
{
    if(esquerdo < direito)
    {
        meio = esquerdo + Math.floor((direito-esquerdo)/2);

        mergeSort(vetor, esquerdo, meio);
        mergeSort(vetor,(meio+1), direito);

        //merge()
    }
}*/