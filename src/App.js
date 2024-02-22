import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Pages/Footer/Footer';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home';
import Donation from './Component/Pages/Donation/Donation';
import Events from './Component/Pages/Events/Events';
import Blog from './Component/Pages/Blog/Blog';
import Login from './Component/Auth/Login/Login';
import Signup from './Component/Auth/Signup/Signup';
import NotFound from './Component/Pages/NotFound/NotFound';
import Admin from './Component/Pages/Admin/Admin';
import RegiList from './Component/Pages/RegiList/RegiList';
import AddEvent from './Component/Pages/AddEvent/AddEvent';


function App() {
  return (
    <div>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/donation' element={<Donation></Donation>}></Route>
            <Route path='/events' element={<Events></Events>}></Route>
            <Route path='/blogs' element={<Blog></Blog>}></Route>
            <Route path='/admin' element={<Admin></Admin>}>
              <Route path='regilist' element={<RegiList></RegiList>}></Route>
              <Route path='addevents' element={<AddEvent></AddEvent>}></Route>
            </Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
    </div>
  );
}

export default App;
