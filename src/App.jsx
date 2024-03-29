import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';

function App() {
  const [count, setCount] = useState(0)

  const [posts, setPosts] = useState([])

  const handlePostSubmit = (postTitle, aboutPost) => {
    const newPost = { title: postTitle, content: aboutPost }

    setPosts([...posts, newPost])
  }

  return (
    <div>
      <h1>Fakebook!</h1>
      
        {/* CreatePostForm */}
        <CreatePostForm onPostSubmit={handlePostSubmit}/>
        
        {/* Feed */}
        
        {/* <Post content="This is a test post!" />

        <Post content="This is another test post!" /> */}

       <Feed posts={posts} />
    
    </div>

  )
}

export default App
