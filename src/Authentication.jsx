import { useState } from 'react';

export function SignIn(props) {
  const [name, setName] = useState('');

  async function createUser(e) {
    e.preventDefault();
    const user = { name };
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
