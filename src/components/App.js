import React from "react";
import blogData from "../data/blog";
import Header from './Header'
import About from './About'
import ArticelList from './ArticleList'

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about={blogData.about}/>
      <ArticelList posts={blogData.posts} />
        </div>
  );
}

export default App;
