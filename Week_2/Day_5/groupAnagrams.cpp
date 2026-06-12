class Solution
{
public:
    string getHash(string &s)
    {
        string hash = "";
        vector<int> freq(26, 0);
        for (char ch : s)
            freq[ch - 'a'] += 1;
        for (int i = 0; i < 26; i++)
        {
            if (freq[i] != 0)
                hash.append(to_string(freq[i]));

            hash.append("$");
        }
        return hash;
    }

    vector<vector<string>> groupAnagrams(vector<string> &strs)
    {
        vector<vector<string>> res;
        unordered_map<string, vector<string>> mp;
        for (int i = 0; i < strs.size(); i++)
        {
            string key = getHash(strs[i]);

            mp[key].push_back(strs[i]);
        }
        for (auto x : mp)
        {
            res.push_back(x.second);
        }
        return res;
    }
};
