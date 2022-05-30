import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorite from './components/Favorite/Favorite';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

export interface IData{
  breeds: number[];
  id: string,
  height: number,
  width: number,
  url: string
}
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
