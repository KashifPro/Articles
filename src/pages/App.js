import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About'
import Header from './Header'
import Home from './Home'
import ArticlePage from './ArticlePage'
import ArticleList from './ArticleList'
function App() {
  return (
    <BrowserRouter>
    <div>
    <Header />
        <Routes>
        
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/articles' element={<ArticleList />} />
        <Route path='/article/:articleId' element={<ArticlePage />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App