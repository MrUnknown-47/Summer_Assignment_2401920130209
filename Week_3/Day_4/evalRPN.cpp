class Solution
{
public:
    int evalRPN(vector<string> &arr)
    {
        int n = arr.size();
        stack<int> st;
        long long ans = 0;
        for (int i = 0; i < n; i++)
        {

            if (arr[i] == "+")
            {
                int x = st.top();
                st.pop();
                int y = st.top();
                st.pop();
                int z = x + y;
                st.push(z);
            }
            else if (arr[i] == "-")
            {
                int x = st.top();
                st.pop();
                int y = st.top();
                st.pop();
                int z = y - x;
                st.push(z);
            }
            else if (arr[i] == "*")
            {
                int x = st.top();
                st.pop();
                int y = st.top();
                st.pop();
                int z = x * y;
                st.push(z);
            }
            else if (arr[i] == "/")
            {
                int x = st.top();
                st.pop();
                int y = st.top();
                st.pop();
                int z = y / x;
                st.push(z);
            }
            else
            {
                int x = stoi(arr[i]);
                st.push(x);
            }
        }
        return st.top();
    }
};