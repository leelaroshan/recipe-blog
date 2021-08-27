import React from 'react'
import marked from 'marked';
import './post.css';

export default function Post({recipes,index}) {

  console.log(recipes)
    const { name, featuredimage, description, ingredients } = recipes.fields;
    const postdescription=  marked(description)
    return (
       

<div className="post">
      <h2 className="title">{name}</h2>
      {featuredimage && <img src={featuredimage.fields.file.url} className="featuredImage" alt={name}  title={name}/>}
      <section classname="description" dangerouslySetInnerHTML={{__html:postdescription}} />
      <p className="ingredients">{ingredients}</p>
      {/* <p>{description}</p>
      */}
      </div>
    )
}
