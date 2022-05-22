
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div >
      <Navbar>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
