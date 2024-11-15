import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Pages/Login/login';
import Welcome from './Pages/Welcome/welcome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/welcome' element={<Welcome />}></Route>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
