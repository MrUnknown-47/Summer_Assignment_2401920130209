#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    int removeDuplicates(vector<int> &nums)
    {
        int n = nums.size();
        if (n <= 1)
            return n;
        vector<int> arr;
        arr.push_back(nums[0]);
        for (int i = 1; i < n; i++)
        {
            if (nums[i] != nums[i - 1])
                arr.push_back(nums[i]);
        }
        nums = arr;
        return arr.size();
    }
};

int main()
{
    vector<int> nums = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};

    Solution sol;
    int k = sol.removeDuplicates(nums);

    cout << "Unique count = " << k << endl;
    cout << "Array after removing duplicates: ";
    for (int x = 0; x < k; x++)
    {
        cout << nums[x] << " ";
    }
    cout << endl;

    return 0;
}