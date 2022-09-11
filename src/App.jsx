import './App.css';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';
import { Dashboard } from './Dashboard';
import { SignIn } from './Authentication';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
}

const fbApp = initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

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
