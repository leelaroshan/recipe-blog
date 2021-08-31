import React from 'react'
import marked from 'marked';
import { useParams } from 'react-router-dom';

import './post.css';

export default function Post({recipes}) {


  const {id} = useParams();



  if(recipes.length === 0) {  
    return (
      <div><h4></h4></div>
    )
  }
 
  


  console.log(recipes)

  
    const { name, image, preparation } = recipes.find(recipe => recipe.sys.id === id).fields;
    console.log(id, name,image,preparation);
    const postdescription =  marked(preparation)
    return (
       

<div className="post">
      <h2 className="title">{name}</h2>
      {image && <img src={image.fields.file.url} className="image" alt={name}  title={name}/>}
    
      <section className="description" dangerouslySetInnerHTML={{__html:postdescription}} />
      {/* <p className="ingredients">{ingredients}</p> */}
      
      </div>
    )
}






/*


export default function Post({recipes,index}) {

  console.log(recipes)
    const { name, featuredimage, description, ingredients } = recipes.fields;
    const postpreparation=  marked(description)
    return (
       

<div className="post">
      <h2 className="title">{name}</h2>
      {featuredimage && <img src={featuredimage.fields.file.url} className="featuredImage" alt={name}  title={name}/>}
    
      <section className="description" dangerouslySetInnerHTML={{__html:postpreparation}} />
      <p className="ingredients">{ingredients}</p>
      {/* <p>{description}</p>
      */
      
