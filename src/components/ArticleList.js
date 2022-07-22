
import Article from "./Article";

const ArticelList = ({posts}) => {
    
    const articles = posts.map((posts) =>(
        <Article key={posts.id}
        title={posts.title}
        date={posts.date}   
        preview={posts.preview}
        />  )
        )   
         
    return(
        <main>{articles}</main>
    )
}

export default ArticelList;