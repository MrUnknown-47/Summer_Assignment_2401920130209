#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    vector<int> spiralOrder(vector<vector<int>> &mat)
    {
        int m = mat.size(), n = mat[0].size();
        int srow = 0, scol = 0, erow = m - 1, ecol = n - 1;
        vector<int> ans;
        while (srow <= erow && scol <= ecol)
        {

            for (int i = scol; i <= ecol; i++)
                ans.push_back(mat[srow][i]);

            for (int i = srow + 1; i <= erow; i++)
                ans.push_back(mat[i][ecol]);

            for (int i = ecol - 1; i >= scol; i--)
            {
                if (srow == erow)
                    break;
                ans.push_back(mat[erow][i]);
            }

            for (int i = erow - 1; i >= srow + 1; i--)
            {
                if (scol == ecol)
                    break;
                ans.push_back(mat[i][scol]);
            }

            srow++, scol++, erow--, ecol--;
        }

        return ans;
    }
};

int main()
{
    Solution obj;

    vector<vector<int>> matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}};

    vector<int> result = obj.spiralOrder(matrix); // {1,2,3,6,9,8,7,4,5}

    for (int val : result)
    {
        cout << val << " ";
    }

    return 0;
}