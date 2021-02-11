import './App.css';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home'
import TeacherR from './components/Register/TeacherR';
import StudentR2 from './components/Register/StudentR2';
import AccSTmenu from './components/UserProfile/StudentP/AccSTmenu';
import AccSTsubscriptions from './components/UserProfile/StudentP/AccSTsubscriptions';
import About from './components/About/About'
import Contact from './components/Contact/Contact'


function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
       
         <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/teacherR"  component={TeacherR} />
            <Route path="/studentR2"  component={StudentR2} />
            <Route path='/accSTsubscriptions'  component={AccSTsubscriptions} />
            <Route path="/accSTmenu"  component={AccSTmenu} />
            <Route path="/home"  component={Home} />
            <Route path="/about"  component={About} />
            <Route path="/contact"  component={ Contact} />


       </Switch>

    </div>
    </BrowserRouter> 
        
        
  );
}

export default App;


 