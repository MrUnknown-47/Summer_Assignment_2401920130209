class Solution
{
public:
    int ans = INT_MIN;
    int maxSum(TreeNode *root)
    {
        if (root == NULL)
            return 0;
        int left = max(0, maxSum(root->left));
        int right = max(0, maxSum(root->right));
        ans = max(ans, left + right + root->val);
        return max(left, right) + root->val;
    }
    int maxPathSum(TreeNode *root)
    {
        maxSum(root);
        return ans;
    }
};