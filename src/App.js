import { BrowserRouter ,Switch ,Route} from 'react-router-dom';
import About from './About/About.js';
import './App.css';
import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer.js';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Services from './Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      
      <Switch>
        <Route exact path="/"> 
          <Home
          ></Home>
        </Route>
        
        <Route path="/home"> 
        <Home></Home>
        </Route>
        
        <Route path="/about">
           <About>
           </About>
        </Route>
        <Route path="/services"> 
        <Services></Services>
        </Route>
        <Route path="/contact">
            <Contact>  
            </Contact>
        </Route>
        <Route exact path="*"> 
          <NotFound></NotFound>
        </Route>
      </Switch>

    <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
