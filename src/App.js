import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/layout/home/home';
import { Layout } from './components/layout/layout';
import {Login} from './components/login/login';
import { Registration } from './components/registration/registration';
import { SiteReg } from './components/layout/site-reg/site-reg';
import Sites from './components/layout/sites/site';
import { CustomerRegistration } from './components/layout/customer-reg/registration';


function App() {
  const [isuserLoggedIn, setUserLoggedIn]=useState(false);
  function userLoggedIn(param){
    setUserLoggedIn(param);
  }  
  return (
    <div className="container-fluid">
      <BrowserRouter>
        { isuserLoggedIn && <Layout></Layout>}
          <Routes>
            <Route path="/" element={<Login userValid={(event)=>{userLoggedIn(event)}}></Login>}></Route>
            <Route path="reg"  element={<Registration></Registration>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="sitereg" element={<SiteReg></SiteReg>}></Route>
            <Route path="sites" element={<Sites></Sites>}></Route>
            <Route path="sites/:type" element={<Sites></Sites>}></Route>
            <Route path="customer-reg" element={<CustomerRegistration></CustomerRegistration>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
