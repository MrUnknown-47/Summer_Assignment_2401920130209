class Solution
{
public:
    vector<int> dailyTemperatures(vector<int> &temperatures)
    {
        int n = temperatures.size();
        stack<int> indexStack;
        vector<int> result(n);

        for (int i = n - 1; i >= 0; --i)
        {
            while (!indexStack.empty() && temperatures[indexStack.top()] <= temperatures[i])
                indexStack.pop();

            if (!indexStack.empty())
                result[i] = indexStack.top() - i;

            indexStack.push(i);
        }

        return result;
    }
};