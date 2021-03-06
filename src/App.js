
import {useState, useEffect} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar  from './components/Navbar';
import { client } from './client';
import Post from './components/Post';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Recipe from './components/Recipe';
// import Posts from './components/Posts';





function App() {

  const [articles, setArticles] = useState([])

useEffect(() => {
  
  client.getEntries()
  .then(response=> {
  console.log(response.items)
  console.log(response.items[0].fields.name);

  setArticles(response.items)
  })
  .catch((err)=>console.log(err)) 
  
}, [])






  return (
    <div className="App">

     <div className="container">
       
     
     <div>
       <Header />

       <div className="nav-switch-div"> 
       <Navbar />
       
       <Switch>
       <Route exact path="/">
      <Home  />
       </Route>
       <Route  path="/home">
      <Home  />
       </Route>
      <Route  path="/categories">
      <Recipe recipes={articles}/>
      </Route>

      <Route path="/recipes/:id">
      <Post  recipes={articles} />

      </Route>



      <Route path="/about">
      <About />
      </Route>
      <Route path="/contact">
      <Contact  />
      </Route>
       </Switch>
       </div>
       

   

     
   <Footer />
       
      
     </div> 
         </div>
      
    </div>
  );
}

export default App;
