import { Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import CatList from './pages/CatList'
import CatDetail from './pages/CatDetail'
import PublishCat from './pages/PublishCat'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Profile from './pages/Profile'
import Admin from './pages/Admin'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats" element={<CatList />} />
          <Route path="/cats/:id" element={<CatDetail />} />
          <Route path="/publish" element={<PublishCat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App 