import ProfileCard from './ProfileCard';
import NotificationList from './NotificationList';
import Card from './Card';
import avatar from './assets/avatar.png';

function App() {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 24, fontFamily: 'system-ui' }}>
      <h1>Week 11 Practice Exercises</h1>

      <h2>Exercise 1: ProfileCard</h2>
      <ProfileCard
        name="Jasper Teo Kheng Cher"
        role="Computer Engineering Student"
        email="jastkc8@gmail.com"
        avatarUrl={avatar}
      />

      <h2>Exercise 2: Notifications</h2>
      <NotificationList />

      <h2>Exercise 3: Card with children</h2>
      <Card title="Lecture Topics">
        <ul>
          <li>Components</li>
          <li>Props</li>
        </ul>
      </Card>
      <Card title="Homework">
        <p>Build a student portfolio component</p>
      </Card>
    </div>
  );
}

export default App;
