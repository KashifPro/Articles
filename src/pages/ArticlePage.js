import React from 'react'
import {useParams} from 'react-router-dom'
import articles from './article-content'

function ArticlePage() {
    // const [[post],setPost]=React.useState(articles.map((nuts)=>({...nuts})))
//   const [post1,post2,post3,post]=articles.map((nuts)=>({...nuts}))
 const { articleId } = useParams();
 const article = articles.find(article => article.name === articleId);
    return (
      <div className='text--center'>
      <div className='note'>
        
      <h1>Title: {article.title}</h1>
      {article.content.map(paragraph => (
          <p>{paragraph}</p>
      ))}
      </div>
      </div>
  
  
  )
}

export default ArticlePage