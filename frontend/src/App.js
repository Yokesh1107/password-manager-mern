
import { useState } from 'react';
import {Route,Routes} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'

import './App.css';
import './index.css'
import Home from './pages/Home';
import { UserContextProvider } from './components/UserContext';
import Data from './pages/Data';
// import Landing from './pages/Landing';
import Header from './components/Header';
import Layout from './components/Layout';
import EditData from './pages/EditData';
function App() {
 return(
  <UserContextProvider>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Header/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/edit/:id' element={<EditData/>}/>
    <Route path='/newdata' element={<Data/>}/>
    </Route>
  </Routes>
  </UserContextProvider>
 )
}

export default App;
