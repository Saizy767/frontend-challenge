import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorite from './components/Favorite/Favorite';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
