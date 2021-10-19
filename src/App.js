import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About/About';

import Header from './components/Home/Header/Header';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Login from './components/Home/Login/Login';
import Register from './components/Home/Register/Register';
import AuthProvider from './Context/AuthProvider';
import ServiceDetails from './components/Service/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import Doctors from './components/Doctors/Doctors';
import Testimonial from './components/Testimonial/Testimonial';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path='/servicesdetail/:id'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/doctor'>
              <Doctors></Doctors>
            </Route>
            <Route path='/testimonial'>
              <Testimonial></Testimonial>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
