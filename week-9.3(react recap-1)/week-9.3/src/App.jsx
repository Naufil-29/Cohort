import { useState } from 'react';
import './App.css';
import { PostComponent } from './Post.jsx';
import { BellComponent } from './Msg.jsx';

function App() {

  const [posts, setPosts] = useState([])

  // const posts = [{ 

  // }];

  const postComponents = posts.map(post => <PostComponent 
      name={post.name}
      followerCount={post.followerCount}
      time={post.time}
      image={post.image}
      description={post.description}
      />)

      function addPost(){ 
        setPosts([...posts,{ 
              name: "harkirt",
              followerCount: "24 followers",
              time: "2m ago",
              image: "https://i.pravatar.cc/40",
              description: "Want to know how to win big? Check out how these folks won $6000 bounties."
        }])
      }

  return (
    <div style={{backgroundColor: "#dfe6e9", height: "100vh"}}> 
    <div style={{display: "flex", gap: 20, padding: 20, alignItems: "center", justifyContent: "center"}}> 
    <ToggleMessage />

    <NotificationCount />

    <BellComponent/>
    </div>

      {postComponents}
      <button onClick={addPost}>add post</button>
    </div>
  )
}

function NotificationCount(){ 
  let [notificationCount, setNotificationCount] = useState(0);
  function increment(){

     setNotificationCount(notificationCount + 1);
  }

  return( 
    <div> 
          <p>{notificationCount}</p>
      <button onClick={increment}>Notification Button</button>
    </div>
  )
}

function ToggleMessage(){ 
  const [isVisible, setIsVisible] = useState(true);

  function Toggle(){ 
    setIsVisible(!isVisible);
  }

  return( 
    <div> 
      <button onClick={Toggle}>toggle button</button>
      {isVisible && <p>This is a toggle message</p>}
    </div>
  )
}



export default App
