import data from 'response/data.json';
import './App.css';
import Box from 'components/box';
import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';
import StatisticsList from 'components/statisticsList/StatisticsList';
import FriendList from 'components/friendList/FriendList';
import TransactionHistory from 'components/transactionHistory';

const App = () => {
  const user = data.user;

  return (
    <div className="App">
      <Box>
        <Profile
          imgSrc={user.avatar}
          userName={user.username}
          tag={user.tag}
          location={user.location}
          followers={user.stats.followers}
          likes={user.stats.likes}
          views={user.stats.views}
        />
      </Box>

      <Box>
        <Statistics title="Upload stats">
          <StatisticsList stats={data.statisticsData} />
        </Statistics>
      </Box>

      <Box>
        <FriendList friends={data.friends} />
      </Box>

      <Box>
        <TransactionHistory items={data.transactions} />
      </Box>
    </div>
  );
};
export default App;
