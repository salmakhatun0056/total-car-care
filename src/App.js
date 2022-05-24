
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
// import Footer from './components/Footer';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import AddAProduct from './pages/Dashboard/AddAProduct';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageProducts from './pages/Dashboard/ManageProducts';





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
          {/* <Route path='/reviews' element={<Reviews />}></Route> */}


          <Route path='/tool/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>

          <Route path='/dashboard' element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>

            <Route path='/dashboard/' element={<MyOrders />}></Route>
            <Route path='/dashboard/add-review' element={<AddReview />}></Route>
            <Route path='/dashboard/my-profile' element={<MyProfile />}></Route>
            <Route path='/dashboard/manage-all-orders' element={<ManageAllOrders />}></Route>
            <Route path='/dashboard/add-a-product' element={<AddAProduct />}></Route>
            <Route path='/dashboard/make-admin' element={<MakeAdmin />}></Route>
            <Route path='/dashboard/manage-products' element={<ManageProducts />}></Route>

          </Route>



          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        {/* <Footer /> */}
      </Navbar>

    </div>
  );
}

export default App;
