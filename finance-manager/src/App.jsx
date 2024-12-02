import { React } from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import Navber from './components/Navbar';
import Home from './pages/Home';
import income from './pages/income';
import Expenses from './pages/Expenses';
// import Transitions from './pages/Transactions';
// import Savings from './pages/Savings';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/income" element={<income/>} />
        <Route path="/expenses" element={<Expenses />} /> 
        <Route path="/transitions" element={<Transitions/>}/>
        <Route path="/savings" element={<Savings/>}/>
        <Route path="*" element={<h1>404 - Page Not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default App
