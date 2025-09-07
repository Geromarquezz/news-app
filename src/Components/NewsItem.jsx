
const NewsItem = ({title,description,src,url}) => {
    return (
        <div className="card bg-dark text-light mb-3 my-3 mx-3 px-2 py-2 align-top d-inline-flex justify-content-center" style={{maxWidth:"345px"}}>
            <img src={src} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column h-100" >
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description?description.slice(0,20000):"News"}</p>
                    <a href={url} className="btn btn-primary mt-auto">Leer mas</a>
                </div>
        </div>
    )
}

export default NewsItem