import './App.css';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';

// const firebaseConfig = {
//
// }
//
// const app = initializeApp(firebaseConfig)
// const fireStore = getFirestore(app)

function ChatRoom(props) {
  return (
      <>
        Hello, {props.user.name}
      </>
  );
}

function SignIn(props) {
  const [name, setName] = useState('');

  async function createUser(e) {
    e.preventDefault();
    const user = {name};
    props.setUser(user);
  }

  return (
      <>
        <h2>Sign In</h2>
        <form onSubmit={createUser}>
          <label htmlFor="Name">Name</label>
          <input type="text" placeholder="Name" required value={name}
                 onChange={async (e) => setName(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button type="submit" disabled={!name}>Sign In</button>
        </form>
      </>
  );
}

function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  return (
      <div className="App">
        <Header />
        <div className="card">
          {user ? <ChatRoom user={user} /> : <SignIn setUser={setUser} />}
        </div>
        <Footer />
      </div>
  );
}

export default App;
