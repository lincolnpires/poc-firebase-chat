/**
 * For now, this is just a placeholder for the dashboard/chat.
 * @param {*} props holds the user's name
 * @returns
 */
import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getFirestore, collection } from 'firebase/firestore';

export function Dashboard(props) {
  const [user, setUser, app] = props;
  const db = getFirestore(app);
  const messagesReference = collection(db, 'messages');
  const [newMessage, setNewMessage] = useState('');
  const [messages] = useCollectionData(
      messagesReference, { idField: 'id' });

  async function sendMessage(e) {
    e.preventDefault();
    const message = {
      name: user.name,
      message: newMessage,
      createdAt: new Date(), // treat timezones later
    };
    await messagesReference.add(message);

    setNewMessage('');
  }

  return (
    <>
      Hello, {user.name}
      <button onClick={(e) => {
        e.preventDefault();
        setUser(null);
      }}>Log out</button>
      <div>
        <h2>Chat</h2>
        <div className="chat">
          {messages && messages.map((message, index) => {
            return (
              <div key={index} className="message">
                <p><span className="bold">{message.user}</span>:
                  {message.text}</p>
              </div>
            );
          })}
        </div>
        <form onSubmit={sendMessage}>
          <label htmlFor="message">Message</label>
          <button type="submit">send</button>
        </form>
      </div>
    </>
  );
}
