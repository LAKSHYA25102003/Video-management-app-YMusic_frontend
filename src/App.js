import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import UserAuth from './Pages/UserAuth';
import MainHome from './Pages/MainHome';
import { fetchUser } from './Redux/user/userAction';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBuckets } from './Redux/buckets/bucketAction';



function App() {
  const dispatch= useDispatch();
  useEffect(()=>{
    if(localStorage.getItem("token")!==null)
    {
      dispatch(fetchUser());
      dispatch(fetchBuckets());
    }
  },[])
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/home"  element={<MainHome/>}/>
        <Route path="/auth"  element={<UserAuth/>}/>
      </Routes>
    </Router>
  );
}

export default App;
