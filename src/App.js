
import {useState, useEffect} from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts'


function App() {

  const [articles, setArticles] = useState([])

useEffect(() => {
  
  client.getEntries()
  .then(response=> {
  console.log(response.items)
  setArticles(response.items)
  })
  .catch((err)=>console.log(err))
  
}, [])






  return (
    <div className="App">
     <div className="container">
       
     <header>
     <div className="wraper">
       <span>React and contentful</span>
     </div>
     </header>
     <main>
       <div className="wraper">
       <Posts posts={articles} />
       </div>
       </main> 
         </div>
      
    </div>
  );
}

export default App;
