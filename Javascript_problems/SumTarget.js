
var twoSum = function(nums, target) {
    const map = new Map()
    let count=0
    for(let i=0;i<=nums.length;i++){
        let compliment = target-nums[i]
        if(map.has(compliment)){
            return [map.get(compliment),i]
        }
        map.set(nums[i],i)
    }
};