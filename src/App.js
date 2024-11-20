import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Pages/Login/login';
import Welcome from './Pages/Welcome/welcome';
import NotFound from './Pages/404 not Found/404';

import ProtectedRoute from './Routes/ProtectRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route
          path='/welcome'
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          }
        />
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
