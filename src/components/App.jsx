import Profile from "./profile/Profile";
import user from "./profile/user.json";
import Statistics from "./statistics/Statistics";
import data from "./statistics/data.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
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
        likes={user.stats.likes} />
      
      <Statistics
        title="Upload stats"
        stats={data}
      />
    </div>
  );
};

console.log(App());