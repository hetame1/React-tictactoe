import './App.css'
import Router from '@/components/Router'
import { app } from '@/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from './components/Loader'

function App() {
  const auth = getAuth(app)

  // auth를 체크하기전에 loader를 띄워주기 위한 state
  const [init, setInit] = useState<boolean>(false);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  )

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
      setInit(true)
    })
  }, [auth])

  return (
    <>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated}/> : <Loader />}
    </>
  )
}

export default App
