class Solution
{
public:
    void backTracking(string cur, int open, int close, int n, vector<string> &res)
    {
        if (cur.length() == 2 * n)
        {
            res.push_back(cur);
            return;
        }

        if (open < n)
            backTracking(cur + '(', open + 1, close, n, res);
        if (close < open)
            backTracking(cur + ')', open, close + 1, n, res);
    }
    vector<string> generateParenthesis(int n)
    {
        vector<string> res;
        backTracking("", 0, 0, n, res);
        return res;
    }
};