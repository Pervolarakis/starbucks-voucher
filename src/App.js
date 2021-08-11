import './App.css';
import NavBar from './components/Nav/NavBar'
import OaedForm from './components/Bodies/OaedForm/OaedForm'
import Register from './components/Bodies/Register/Register'
import RedeemCoupon from './components/Bodies/RedeemCoupon/RedeemCoupon'
import AdminPage from './components/Bodies/AdminPage/AdminPage'
import Footer from './components/Footer/Footer'
import MainPage from './components/Bodies/MainPage/MainPage'
import EndedOaedForm from './components/Bodies/EndedOaedForm/EndedOaedForm'
import { HashRouter, Route } from "react-router-dom";
import { createBrowserHistory } from "history";


function App() {
  const history = createBrowserHistory();
  return (
    <HashRouter basename='/' history={history}>
  
      <div>
        <NavBar/>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route exact path="/ended">
          <EndedOaedForm/>
        </Route>
        <Route exact path="/apply">
          <OaedForm/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/redeem">
          <RedeemCoupon/>
        </Route>
        <Route exact path="/admin">
          <AdminPage/>
        </Route>
        
        
      </div>
      <Footer/>
      
    
    </HashRouter>
  );
}

export default App;
