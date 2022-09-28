import React from 'react'
import articles from './article-content'

function ArticleList() {
    
  return (
    
    <div className='note2 styling'>
       <ol>{
    articles.map((nuts,i)=><li key={i}><h1><a href={`http://localhost:3000/article/${nuts.name}`} >{nuts.name}</a> </h1></li>)
    }</ol>
       
        
        </div>
  )
}

export default ArticleList