/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i,j;
    const outputArr = [];
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                outputArr.push(i);
                outputArr.push(j);
                return outputArr;
            }
        }
    }
};