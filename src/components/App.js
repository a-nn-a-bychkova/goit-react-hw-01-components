import Profile from './Profile/Profile';
import user from '../json/user.json';
import Statistics from './Statistics/Statistics';
import statisticalData from '../json/statistical-data.json';
import friends from '../json/friends.json';
import FriendsList from './Friends/FriendsList';
import transactions from '../json/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
