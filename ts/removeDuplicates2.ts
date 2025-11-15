function removeDuplicates2(nums: number[]): number {
    let i = 0;
    
    for(const ele of nums){
        if( i==0 || i==1 || ele != nums[i-2]){
            nums[i] = ele;
            i++
        }
    }

    return i;
};