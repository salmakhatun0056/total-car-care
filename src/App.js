
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
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';




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

          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='my-orders' element={<MyOrders />}></Route>
            <Route path='add-review' element={<AddReview />}></Route>
            <Route path='my-profile' element={<MyProfile />}></Route>
          </Route>

          <Route element={<RequireAuth />}>
            <Route path='/tool/:id' element={<Purchase />}></Route>
          </Route>


          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer />
      </Navbar>

    </div>
  );
}

export default App;
