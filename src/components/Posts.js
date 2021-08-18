import React from 'react'
import marked from 'marked'
export default function ({posts}){
    console.log(posts);
    // const postdescription = marked(article.fields.description)

    return (
        <div>{posts.map((article,index)=> <div key ={index}><h2 >{article.fields.name}</h2><img src={article.fields.featuredimage}  /><span>{article.fields.description}</span></div>)}
            
        </div>
    )
}
