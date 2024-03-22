import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Components/Post.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Fakebook!</h1>
      
        {/* CreatePostForm */}
        
        {/* Feed */}
        
        <Post />
    
    </div>

  )
}

export default App
