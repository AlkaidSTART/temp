function twoSum1(nums: number[], target: number): number[] {
    const map=new Map<number,number>();
    for(let i=0;i<nums.length;i++){
        let diff=target-nums[i];
        // 如果map中存在diff，说明有解
        if(map.has(diff)){
            return [map.get(diff)! ,i];
        }
        map.set(nums[i],i);
        // 如果map中不存在diff，说明没有解
    }


    return [];
};