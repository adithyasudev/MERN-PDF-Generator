import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Register } from './components/Register'
import Home from './components/Home'

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path ="/" element ={<Navigate to ="login" />} />
        <Route path ="/login" element ={<Login />} />
        <Route path ="/register" element ={<Register />} />
        <Route path ="/home" element ={<Home />} />         
                 
      </Routes>
    </div>
    </>
  )
}

export default App
