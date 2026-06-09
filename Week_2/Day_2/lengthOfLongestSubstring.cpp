#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    int lengthOfLongestSubstring(string s)
    {
        int n = s.size();

        vector<int> hash(256, -1);

        int l = 0, r = 0, maxLen = 0;
        while (r < n)
        {
            if (hash[s[r]] != -1)
                l = max(hash[s[r]] + 1, l);
            int len = r - l + 1;

            maxLen = max(len, maxLen);

            hash[s[r]] = r;

            r++;
        }

        return maxLen;
    }
};

int main()
{
    string s = "cadbzabcd";

    Solution sol;

    int result = sol.lengthOfLongestSubstring(s);

    cout << "The maximum length is:\n";
    cout << result << endl;

    return 0;
}