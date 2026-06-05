#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    void reverseString(vector<char> &s)
    {
        int st = 0, end = s.size() - 1;

        while (st < end)
        {
            swap(s[st++], s[end--]);
        }
    }
};

int main()
{
    vector<char> s = {'h', 'e', 'l', 'l', 'o'};
    Solution sol;
    sol.reverseString(s);
    for (char c : s)
    {
        cout << c << " ";
    }
    cout << endl;
    return 0;
}