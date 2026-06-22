class RecentCounter
{
public:
    std::queue<int> timestamps;

    RecentCounter()
    {
    }

    int ping(int t)
    {
        timestamps.push(t);

        while (!timestamps.empty() && timestamps.front() < t - 3000)
            timestamps.pop();

        return timestamps.size();
    }
};
