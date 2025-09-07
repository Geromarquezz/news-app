import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {

  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then((response) => response.json()).then((data) => setArticulos(data.articles)); //data.articles es el array de la api

  }, [category]);

  return (
    <div>
      <h1 className="text-center" >Ultimas <span className="badge bg-danger mt-4">Noticias</span></h1>
      <div className="d-flex justify-content-center flex-wrap">
        {articulos.map((noticia, index) => {
          return <NewsItem key={index} title={noticia.title} description={noticia.description} src={noticia.urlToImage} url={noticia.url} />

        })}
      </div>
    </div>
  )
}

export default NewsBoard