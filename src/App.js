import './App.css';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './page/RegisterPage';
import HomePage from './page/HomePage';
import CategoryPage from './page/CategoryPage';

function App() {
  return (
    <>
      {' '}
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/category' element={<CategoryPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
