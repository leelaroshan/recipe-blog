import React from 'react';
import './Header.css'


export default function Header() {
  
    return (
        <header className="heading">
            <img  alt="logo"src="https://assets.bonappetit.com/photos/60a2d20f248102a01bcfa0ab/master/w_2560%2Cc_limit/HLY_FoodWaste_ArticleSlide1.png" width="100px" height="100px"></img>
            <h2 className="htwo">Indian Cuisine </h2>
            <input type="text" placeholder="serach" className="search-inp"></input>
        </header>
    )
}
