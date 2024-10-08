import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import CreateQuiz from './pages/CreateQuiz'
import Quiz from './pages/Quiz'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/createQuiz'
            element={<CreateQuiz />}
          />
          <Route
            path='/quiz/:id'
            element={<Quiz />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
