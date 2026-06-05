#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution
{
public:
    string longestCommonPrefix(vector<string> &strs)
    {
        if (strs.empty())
            return "";
        int i;
        sort(strs.begin(), strs.end());
        string first = strs[0];
        string last = strs[strs.size() - 1];
        int m = min(first.length(), last.length());
        for (i = 0; i < m; i++)
        {
            if (first[i] != last[i])
                break;
        }
        return first.substr(0, i);
    }
};

int main()
{
    Solution solution;

    vector<string> input = {"flower", "flow", "flight"};

    string result = solution.longestCommonPrefix(input);

    cout << "Longest Common Prefix: " << result << endl;

    return 0;
}