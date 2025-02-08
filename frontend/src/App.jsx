import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <div >
      <NavBar/>

      <main className='main-content'>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favourites' element={<favourites/>}/>
    </Routes>
   </main>
    </div>
  )
}

export default App
