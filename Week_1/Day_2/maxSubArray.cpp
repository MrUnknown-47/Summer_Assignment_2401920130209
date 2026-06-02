#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
       int curSum= nums[0], maxSum = nums[0];
       for (int i = 1; i<nums.size(); i++){
        curSum = max(curSum + nums[i], nums[i]);  
        maxSum = max(maxSum, curSum);
       }
       return maxSum;
    }
};

int main() {
   vector<int> nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
  
   Solution solution;
   int result = solution.maxSubArray(nums); //6
  
   cout << "The maximum subarray sum is: " << result << endl;
  
   return 0;
}
