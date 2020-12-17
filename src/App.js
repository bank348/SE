
import './App.css';
import Book from './Components/Borrow/Book'
import Navbar from './Components/Navbar/Navbar'
import ReturnBook from './Components/Return/ReturnBook'
import AddBook from './Components/Add/AddBook'
import NewRegister from './Components/Register/NewRegister'
import Search from './Components/Home/Search'
import HistoryBook from './Components/History/HistoryBook'
import history from './Components/History/history'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className = "App">  
          <Navbar/>
          <Switch>
            <Route path = "/" exact component = {Search}/> 
            <Route path = "/Add" component = {AddBook}/> 
            <Route path ="/Return" component = {ReturnBook}/>
            <Route path ="/History"component = {HistoryBook}/>
            <Route path ="/Book" component = {Book}/>
            <Route path ="/Register"component = {NewRegister}/>
            <Route path = "/checkHistory" exact component = {history} />
            
          </Switch>
      </div>
    </Router>
  );
}

export default App;
