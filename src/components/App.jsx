import Profile from './profile/Profile';
import user from './profile/user.json';
import Statistics from './statistics/Statistics';
import data from './statistics/data.json';
import FriendList from './friendList/FriendList';
import friends from './friendList/friends.json';
import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        key={user.tag}
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
