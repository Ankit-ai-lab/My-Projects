import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import router from './router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <>
      <Router>
        <Routes>
          {router.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default App