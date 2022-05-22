
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import Login from './pages/Login'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { publicRoutes } from './routers/publicRoutes';
import { useEffect } from 'react';
import Purchase from './pages/Purchase';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  // const publicRoutes = [
  //   { path: "/", name: 'Home', Component: Home },
  //   { path: "/login", name: 'Login', Component: Login }

  // ]
  return (
    <div >
      <Navbar>
        <Routes>
          {
            publicRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))
          }
          <Route path='/tool/:id' element={
            <Purchase></Purchase>
          }></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
