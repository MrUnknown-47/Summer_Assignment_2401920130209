class Solution
{
public:
    int largestRectangleArea(vector<int> &heights)
    {
        int n = heights.size();
        stack<int> indexStack;
        int maxArea = INT_MIN;

        for (int i = 0; i < n; i++)
        {
            while (!indexStack.empty() && heights[i] < heights[indexStack.top()])
            {
                int topIndex = indexStack.top();
                indexStack.pop();
                int height = heights[topIndex];

                int width = indexStack.empty() ? i : (i - indexStack.top() - 1);
                int area = height * width;

                maxArea = max(maxArea, area);
            }

            indexStack.push(i);
        }

        while (!indexStack.empty())
        {
            int topIndex = indexStack.top();
            indexStack.pop();
            int height = heights[topIndex];

            int width = indexStack.empty() ? n : (n - indexStack.top() - 1);
            int area = height * width;

            maxArea = max(maxArea, area);
        }

        return maxArea;
    }
};