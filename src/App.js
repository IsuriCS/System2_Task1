import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import './App.css';
import Login from './Pages/login';
import Welcome from './Pages/welcome';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/welcome' element={<Welcome />}></Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
