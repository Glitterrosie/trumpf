import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Analytics from './pages/Analytics'

export default function App() {
  return (
    <Routes>
      <Route path="/"          element={<MainPage />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  )
}
