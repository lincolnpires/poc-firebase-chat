import './App.css';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';
import { Dashboard } from './Dashboard';
import { SignIn } from './Authentication';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}

const fbApp = initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  return (
    <div className="App">
      <Header />
      <div className="card">
        {user
          ? <Dashboard user={user} setUser={setUser} app={fbApp} />
          : <SignIn setUser={setUser} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
