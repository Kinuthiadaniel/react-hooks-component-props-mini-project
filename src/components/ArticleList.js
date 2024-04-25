import Article from "./Article"


function ArticleList({posts}){
  const articles = posts.map((article, id)=>{
    return <Article key={id} title={article.title} date={article.date} preview={article.preview}/>
  })
return(
<main>
 {articles}
  
</main>
)
}

export default ArticleList;