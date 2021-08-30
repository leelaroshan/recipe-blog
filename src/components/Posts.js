import React from 'react'

import Post from './Post'
export default function ({posts}){
    console.log(posts);
    // const postdescription = marked(article.fields.description)

    return (
        <div className="wraper">
            {posts.map((article,index)=> <Post recipes={article}  key={index}/>)}
        </div>
       
    )
}




// f

/*


 <div>{posts.map((article,index)=> <div key ={index}>
            <h2 >{article.fields.name}</h2>
            <img src={article.fields.featuredImage}  />
        <span>{article.fields.description}</span>
        featuredimage.fields.file.url
        </div>)}
            
        </div>




        */