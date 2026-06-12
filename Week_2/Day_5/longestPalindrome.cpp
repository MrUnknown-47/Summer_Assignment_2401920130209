#include <iostream>
#include <string>
using namespace std;

class Solution
{
public:
    string longestPalindrome(string str)
    {
        int start = 0, end = 0;

        for (int center = 0; center < str.length(); center++)
        {
            int lenOdd = expandFromCenter(str, center, center);
            int lenEven = expandFromCenter(str, center, center + 1);
            int maxLen = max(lenOdd, lenEven);

            if (maxLen > end - start)
            {
                start = center - (maxLen - 1) / 2;
                end = center + maxLen / 2;
            }
        }

        return str.substr(start, end - start + 1);
    }

private:
    int expandFromCenter(const string &str, int left, int right)
    {
        while (left >= 0 && right < str.length() && str[left] == str[right])
        {
            left--;
            right++;
        }
        return right - left - 1;
    }
};

int main()
{
    Solution sol;
    string input = "babad";
    cout << "Longest Palindromic Substring: " << sol.longestPalindrome(input) << endl;
    return 0;
}