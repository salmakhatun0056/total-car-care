
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Purchase from './pages/Purchase';
import NotFound from './pages/NotFound';
import RequireAuth from './authentication/RequireAuth';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Footer from './components/Footer';
import Register from './pages/Register';



function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div >
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/tool/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>

          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer />
      </Navbar>

    </div>
  );
}

export default App;
