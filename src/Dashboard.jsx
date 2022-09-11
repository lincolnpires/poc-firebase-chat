/**
 * For now, this is just a placeholder for the dashboard/chat.
 * @param {*} props holds the user's name
 * @returns
 */
import { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  getFirestore, collection, addDoc, query, limit
} from 'firebase/firestore';

export function Dashboard(props) {
  const [user, setUser, app] = [props.user, props.setUser, props.app];
  const [chatMessage, setChatMessage] = useState('');
  
  const db = getFirestore(app);
  const messagesReference = collection(db, 'messages');
  const chatsQuery = query(
    messagesReference,
    limit(10)
  );
  const [messages] = useCollectionData(
    chatsQuery, { idField: 'id' });

  async function sendMessage(e) {
    e.preventDefault();
    const newMessage = {
      name: user.name,
      message: chatMessage
    };
    
    try {
      console.log('Adding message to database...');
      const entry = await addDoc(messagesReference, newMessage);
      console.log("Document written with ID: ", entry.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setChatMessage('');
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
          <input type="text" name="message" id="message"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}></input>
          <button type="submit">send</button>
        </form>
      </div>
    </>
  );
}
