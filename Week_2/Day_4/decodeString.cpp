class Solution
{
public:
    string decodeString(string s)
    {
        string currStr = "";

        stack<pair<string, int>> st;

        int repeatCount = 0;

        for (char c : s)
        {
            if (isdigit(c))
                repeatCount = repeatCount * 10 + (c - '0');
            else if (isalpha(c))
                currStr += c;
            else if (c == '[')
            {
                st.push({currStr, repeatCount});
                currStr = "";
                repeatCount = 0;
            }
            else if (c == ']')
            {
                auto [prevStr, prevRepeatCount] = st.top();
                st.pop();
                string repeatedStr = "";
                for (int i = 0; i < prevRepeatCount; i++)
                    repeatedStr += currStr;
                currStr = prevStr + repeatedStr;
            }
        }

        return currStr;
    }
};