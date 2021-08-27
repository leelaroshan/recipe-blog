import React from 'react'

import Post from './Post'
export default function ({recipes}){
    console.log();
    // const postdescription = marked(article.fields.description)

//    const one =  posts.find(article => article.fields.name === "Avocado and Egg Toast");

//    const {name} = one;

    return (
        <div className="wraper">
            <div className="categories-section">
                <h5></h5>
            </div>

{recipes.filter(one => one.fields.name.includes("Avocado")).map(filteredRecipe => (
    <h3>
      {filteredRecipe.fields.name}
    </h3>
  ))}
           

        </div>
       
    )
}



// const result = user.filter(user=> user.name === "search")
// name, featuredimage, description, ingredients 