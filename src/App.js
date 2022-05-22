
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import { publicRoutes } from './routers/publicRoutes';

function App() {
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
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
