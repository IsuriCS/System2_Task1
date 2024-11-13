import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Pages/login';
import Welcome from './Pages/welcome';

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
