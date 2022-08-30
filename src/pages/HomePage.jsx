import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"
import FeedbackList from '../components/FeedbackList'
import FeedbackData from "../data/feedbackData"
import FeedbackStats from "../components/FeedbackStats"
import FeedbackForm from "../components/FeedbackForm"
import AboutIconLink from '../components/AboutIconLink'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete Feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
    
  }

  return (
    <>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      <AboutIconLink />
    </>
  )
}

export default App