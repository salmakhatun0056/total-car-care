
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
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import AddAProduct from './pages/Dashboard/AddAProduct';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageProducts from './pages/Dashboard/ManageProducts';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './authentication/RequireAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import MyPortfolio from './pages/MyPortfolio';
import { useQuery } from 'react-query';
import NotAdmin from './authentication/NotAdmin';
import EditProfile from './pages/Dashboard/EditProfile';





function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  const [user, loading, error] = useAuthState(auth);
  const isTrue = !!user;

  const userData = useQuery(['users', user?.email], () => fetch(`http://localhost:5000/users/${user?.email}`)
    .then(res => res.json())
    , { enabled: isTrue }
  )
  return (
    <div >
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/edit-profile' element={<EditProfile></EditProfile>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/my-portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/tool/:id' element={<RequireAuth><Purchase user={user} /></RequireAuth>}></Route>

          <Route path='/dashboard' element={<RequireAuth userData={userData}>
            <Dashboard userData={userData}></Dashboard>
          </RequireAuth>}>
            {
              userData?.data?.role !== 'admin' && <Route path='/dashboard/' element={<MyOrders user={user}></MyOrders>}></Route>
            }

            <Route path='/dashboard/add-review' element={<NotAdmin userData={userData}><AddReview user={user} /></NotAdmin>}></Route>
            <Route path='/dashboard/my-profile' element={<MyProfile user={user} />}></Route>

            <Route path='/dashboard' element={<RequireAdmin userData={userData}><ManageAllOrders /></RequireAdmin>}></Route>
            <Route path='/dashboard/add-a-product' element={
              <RequireAdmin userData={userData}>
                <AddAProduct />
              </RequireAdmin>}>

            </Route>
            {
              userData?.data?.role === 'admin' && <Route path='/dashboard//make-admin' element={<RequireAuth userData={userData}><MakeAdmin user={user}></MakeAdmin></RequireAuth>}></Route>
            }

            <Route path='/dashboard/manage-products' element={
              <RequireAdmin userData={userData}>
                <ManageProducts />
              </RequireAdmin>}>
            </Route>

          </Route>



          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer />
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
