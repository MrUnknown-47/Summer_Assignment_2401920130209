#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    int maxArea(vector<int> &height)
    {
        int maxWater = 0;
        int lp = 0, rp = height.size() - 1;
        while (lp < rp)
        {
            int ht = min(height[rp], height[lp]);
            maxWater = max(maxWater, (rp - lp) * ht);
            if (ht == height[lp])
                lp++;
            else
                rp--;
        }
        return maxWater;
    }
};

int main()
{
    Solution sol;
    vector<int> height = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    int result = sol.maxArea(height); // 49
    cout << "Maximum water that can be stored: " << result << endl;
    return 0;
}