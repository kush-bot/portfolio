import './App.css';
import Header from './header'
import First from "./Firstpage"
import Second from "./secondpage"
import About from './About'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Contact from './Contect'

function App() {
  return (
   
      <Router>
       <div className="App">
         <Switch>
           <Route path = '/home'>
             <Header />
             <First />
           </Route>
         </Switch>
         <Switch>
           <Route path = '/about'>
             <Header />
             <About  />
           </Route>
         </Switch>
         <Switch>
           <Route path = '/contact'>
             <Header />
             <Contact  />
           </Route>
         </Switch>
         </div>
      </Router>
  

   
  );
}

export default App;
