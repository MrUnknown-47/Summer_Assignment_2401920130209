class Solution
{
public:
    bool isSubsequence(string s, string t)
    {
        if (s.size() > t.size())
            return false;

        int i = 0;
        for (auto it : t)
        {
            if (s[i] == it)
                ++i;
        }

        return i == s.size();
    }
};