class Solution
{
public:
    bool repeatedSubstringPattern(string s)
    {
        string doubleStr = s + s;
        int pos = doubleStr.find(s, 1);
        return pos < s.size();
    }
};