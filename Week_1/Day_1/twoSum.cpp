#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int tar)
    {
        unordered_map<int, int> m;

        for (int i = 0; i < nums.size(); i++)
        {
            int first = nums[i];
            int sec = tar - first;

            if (m.find(sec) != m.end())
                return {i, m[sec]};

            m[first] = i;
        }

        return {-1, -1};
    }
};

int main()
{
    Solution sol;
    vector<int> arr = {2, 7, 11, 15};
    int target = 9;

    vector<int> res = sol.twoSum(arr, target);
    cout << "[" << res[0] << ", " << res[1] << "]" << endl;

    return 0;
}