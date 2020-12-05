// import Profile from './components/Profile/Profile';
// import user from './user.json';
// import Statistics from './components/Statistics/Statistics';
// import StatisticsList from './components/Statistics/StatisticsList';
// import stats from './statistical-data.json';

import friends from './friends.json';
import FriendsList from './components/Friends/FriendsList';

export default function App() {
  return (
    // <div>
    //   <Profile
    //     name={user.name}
    //     tag={user.tag}
    //     location={user.location}
    //     avatar={user.avatar}
    //     folowers={user.stats.followers}
    //     views={user.stats.views}
    //     likes={user.stats.likes}
    //   />
    // </div>

    // <div>
    //   <Statistics title="Upload stats">
    //     <StatisticsList items={stats} />
    //   </Statistics>
    // </div>
    <div>
      <FriendsList friends={friends} />
    </div>
  );
}
