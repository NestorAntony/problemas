void rotate(int* nums, int numsSize, int k) 
{
    int vetorTemporario[numsSize];
    int pos_final = 0;
    
    for(int i=0; i<numsSize; i++)
    {
        vetorTemporario[i] = nums[i];
    }

    for(int j=0; j<numsSize; j++)
    {
        pos_final = (j + k) % numsSize;
        nums[pos_final] = vetorTemporario[j];

    }
}