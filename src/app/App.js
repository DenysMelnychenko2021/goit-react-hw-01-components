import data from 'response/data.json';
import './App.css';
import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';
import StatisticsList from 'components/statisticsList/StatisticsList';
import FriendList from 'components/friendList/FriendList';

const App = () => {
  const user = data.user;

  return (
    <div className="App">
      <Profile
        imgSrc={user.avatar}
        userName={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        likes={user.stats.likes}
        views={user.stats.views}
      />

      <Statistics title="Upload stats">
        <StatisticsList stats={data.statisticsData} />
      </Statistics>

      <FriendList friends={data.friends}></FriendList>
    </div>
  );
};
export default App;
