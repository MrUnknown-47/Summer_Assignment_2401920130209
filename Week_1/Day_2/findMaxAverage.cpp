#include<iostream>
#include<vector>
using namespace std;

class Solution
{
public:
    double findMaxAverage(vector<int> &nums, int k)
    {
        int winSum = 0;
        for (int i = 0; i < k; i++)
        {
            winSum += nums[i];
        }
        int maxSum = winSum;
        for (int i = k; i < nums.size(); i++)
        {
            winSum += nums[i] - nums[i - k];
            maxSum = max(maxSum, winSum);
        }
        return (double)maxSum / k;
    }
};

int main() {
   vector<int> nums = {1,12,-5,-6,50,3};
  
   Solution solution;
   double result = solution.findMaxAverage(nums, 4); //12.75
  
   cout << "The maximum average is: " << result << endl;
  
   return 0;
}