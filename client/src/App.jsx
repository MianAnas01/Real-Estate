import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Signin from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Header from './components/Header';

export default function App() {
  return (
   
      <Router>
        <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Sign-in' element={<Signin />} />
      <Route path='/Sign-up' element={<SignUp />} />
        </Routes>
      </Router>
   
  )
}