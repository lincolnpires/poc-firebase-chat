import './App.css';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';

const firebaseConfig = {

}

const app = initializeApp(firebaseConfig)
const fireStore = getFirestore(app)

function ChatRoom() {
  return (
      <>
        Hello
      </>
  );
}

function SignIn() {
  return (
      <>
        <h2>Sign In</h2>
        <form>
          <label htmlFor="Name">Name</label>
          <input type="text" placeholder="Name" required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button onClick={() => {}}>Sign In</button>
        </form>
      </>
  )
}

function App() {
    let user = null;

    return (
    <div className="App">
      <Header />
      <h1>Vite + React</h1>
      <div className="card">
        {user ? <ChatRoom /> : <SignIn />}
      </div>
      <Footer />
    </div>
  )
}

export default App
