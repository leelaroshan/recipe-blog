import React from 'react';
import './Recipe.css';
import {Link} from 'react-router-dom';


export default function ({recipes}){
    console.log(recipes);
   

//    const one =  recipes.find(article => article.fields.name === "vada");
//    console.log(one)

//    const {name} = one.fields;

    return (
        <div className="categories-container" >
            <h4 className="hh"> Breakfast Recipes</h4>
            <div  className="containertop">

            
            
            <div className="background"> 
          {recipes.map((recipe,index)=> ( 
             <div className="card"> 
              <h3 key={index}>{recipe.fields.name}</h3>
              <img key={index} src={recipe.fields.image.fields.file.url} 
        width="200px" height="200px" 
       alt={recipe.fields.name}
        className="card-img" /> 

       <Link to="/recipes">
           <button className="readbtn">Read </button>
           </Link>
              </div>
          
          )
        )}
            
            </div>

</div>
           

        </div>
       
    )
}



// const result = user.filter(user=> user.name === "search")
// name, featuredimage, description, ingredients 
//<p>{filteredRecipe.fields.description}</p>

/*


{recipes.filter(one => one.fields.name.includes('Idly')).map((filteredRecipe, index) => (
    
    <div className="card"> 
    <h3 key={index}>{filteredRecipe.fields.name}</h3>
       <img key={index} src={filteredRecipe.fields.image.fields.file.url} 
     width="200px" height="200px" 
      alt={filteredRecipe.fields.name}
      className="card-img" /> 

<button className="readbtn">Read </button>

      

    
      </div>
        <Link to="/dashboard">
     <button type="button">
          Click Me!
     </button>
 </Link>
    
    
  ))} 
  



*/  