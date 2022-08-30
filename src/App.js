import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
   <FeedbackProvider>
     <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
   </FeedbackProvider>
  )
}

export default App