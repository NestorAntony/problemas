#include <stdio.h>

void preencherVetor(int vetor[], int tamanho){
    for(int i=0; i<tamanho; i++)
    {
        vetor[i] = i + 1;
    }
}

void lerVetor(int* vetor, int tamanho){
    for(int i=0; i<tamanho; i++)
    {
        printf("valor do indice %d: %d\n",i , *(vetor+i));
        // ou também
        printf("valor do indice %d: %d\n",i , vetor[i]);
    }
}

void preencherMatriz(int* matriz,int tamanho){
    for(int i=0; i<tamanho; i++)
    {
        for(int j=0; j< tamanho; j++)
        {
            *(matriz+ (i*tamanho) +j) = j+1;
            //matriz[i][j] = j+2;
        }
    }
}

void lerMatriz(int tamanho, int matriz[tamanho][tamanho]){
    for(int i=0; i<tamanho; i++)
    {
        printf("indice %d: ", i);
        for(int j=0; j<tamanho; j++)
        {
            //printf();
            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }
}

int main(){
    int tamanhoVetor;
    printf("Digite o tamanho do vetor: \n");
    scanf("%d",&tamanhoVetor);

    int vetor[tamanhoVetor];
    
    //alterarTam(tamanhoVetor);//fazer isso

    preencherVetor(vetor,tamanhoVetor);
    lerVetor(&vetor[0], tamanhoVetor);

    int tamanhoMatriz;
    printf("Digite o tamanho da matriz: \n");
    scanf("%d",&tamanhoMatriz);

    int matriz[tamanhoMatriz][tamanhoMatriz];

    preencherMatriz(&matriz[0][0], tamanhoMatriz);
    lerMatriz(tamanhoMatriz, matriz);

    return 0;
}