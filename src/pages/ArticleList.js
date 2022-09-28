import React from 'react'
import articles from './article-content'

function ArticleList() {
    const list =articles.map((nuts)=><ul><li><h1><a href={`http://localhost:3000/article/${nuts.name}`} >{nuts.name}</a> </h1></li></ul>)
  return (
    <div className='note2 styling'>
       
       <h2>Articles{list}</h2>
        
        </div>
  )
}

export default ArticleList