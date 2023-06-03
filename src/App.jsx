
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Posts from './components/Posts';
import EditPost from './components/SinglePost';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/posts/:id/edit" element={<EditPost />} />
    </Routes>
  )
}

export default App
