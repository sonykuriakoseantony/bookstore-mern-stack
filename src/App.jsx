import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './users/pages/Home'
import BooksArchive from './users/pages/BooksArchive'
import Profile from './users/pages/Profile'
import Contact from './users/pages/Contact'
import ViewBook from './users/pages/ViewBook'

import AdminHome from './admin/pages/AdminHome'
import AdminCollection from './admin/pages/AdminCollection'
import AdminProfile from './admin/pages/AdminProfile'
import Auth from './pages/Auth'
import PageNotFound  from './pages/PageNotFound'
import PreLoader from './components/PreLoader'

function App() {
  const [loader, setLoader] = useState(true)

  setTimeout(() => {
    setLoader(false)
  }, 100)

  return (
    <>
    
      <Routes>
        <Route path='/' element={loader?<PreLoader /> : <Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth registerURL={true} />} />
        <Route path='/books' element={<BooksArchive />} />
        <Route path='/conatct' element={<Contact />} />

        <Route path='/user/profile' element={<Profile />} />
        <Route path='/books/:id/view' element={<ViewBook />} />

        <Route path='/admin/home' element={<AdminHome />} />
        <Route path='/admin/collection' element={<AdminCollection />} />
        <Route path='/admin/profile' element={<AdminProfile />} />

        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
