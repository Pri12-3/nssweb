import { Route,Routes } from 'react-router-dom'
import Home from './pages/home';
import './App.css'
import Login from "./pages/login";
import ForgotPassword from './components/forgot-password';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
    </Routes>
  )
}

export default App;
