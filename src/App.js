import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import LogIn from './components/LogIn/LogIn';
import AddService from './components/AddService/AddService';
import Details from './Details/Details';
import MyOders from './components/MyOders/MyOders';
import ManageOrders from './components/MangaeOrders/ManageOrders';
import AuthProvider from './components/ContextApi/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/banner">
            <Banner></Banner>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          
            <PrivateRoute path="/myorders">
              <MyOders></MyOders>
            </PrivateRoute>
       
          <PrivateRoute path="/manageorders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute path="/addservice">
            <AddService></AddService>
          </PrivateRoute>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>

          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
