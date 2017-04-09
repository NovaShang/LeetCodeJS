/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const tmp= new Map();
    for(var i=0;i<nums.length;i++){
        var x = nums[i];
        if (tmp.has(x)){
            return [tmp.get(x),i];
        }else{
            tmp.set(target-x,i);
        }
    }
};

console.log(twoSum([2, 7, 11, 15],9));