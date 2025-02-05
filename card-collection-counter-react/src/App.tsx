import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './containers/Authentication/pages/Login';
import Register from './containers/Authentication/pages/Register';

function App() {
  return (
    <div style={{ minHeight: '100vh', minWidth: '100vw', padding: '4rem' }}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/' element={<p>hi</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
