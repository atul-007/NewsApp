import React, { useState, useEffect } from "react";
import NewsItem from "./newsItem";
import Spinner from "./spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios"

export default function News(props) {
    const apiKey='df13fa1cab224415bb77efc02bc56c36'
    const date= new Date
    const [loading, setLoading] = useState(true)
    const [article, setArticle] = useState([])
    const [totalresults, setTotalresults] = useState(0)
    const [page, setPage] = useState(1)
    const [email, setEmail] = useState("")
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    const updateNews = async () => {
        setLoading(true)
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}${props.select.value===""?"":`&country=${props.select.value}`}`
        const url2= `https://newsapi.org/v2/everything?q=${props.search.searchText}&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&to=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&sortBy=popularity&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`
        const data = await fetch(props.search.search?url2:url);
        const prasedData = await data.json()
        setArticle(prasedData.articles);
        setTotalresults(prasedData.totalresults)
        setLoading(false)
    }
    useEffect(() => { updateNews() }, [])
    useEffect(() => { updateNews() }, [props.search,props.select])

    const fetchData= async () => {   
        const url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&apiKey=${apiKey}&page=${page+1}&pageSize=${props.pageSize}${props.select.value===""?"":`&country=${props.select.value}`}`;
        const url2= `https://newsapi.org/v2/everything?q=${props.search.searchText}&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&to=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&sortBy=popularity&apiKey=${apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page+1) 
        const data = await fetch(props.search.search?url2:url);
        let parsedData = await data.json()
        setArticle(article.concat(parsedData.articles))
        setTotalresults(parsedData.totalResults)
      };
      const HandleSubmit = ()=>{
        axios.post("http://localhost:8080/subscribe",{
            email
        }).then((res)=>{
            alert("Subscribed ")
        }).catch((err)=>{
          alert("Already Subscribed")
        })
      }
    return (<>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form>
      <div class="modal-body">
  <div class="">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{
        setEmail(e.target.value)
    }}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
      </div>
      <div class="modal-footer p-1">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={HandleSubmit}>Subscribe</button>
      </div>
</form>
    </div>
  </div>
</div>
        {loading && <Spinner />}
        <h1 className="text-center mt-3">
      <span>{props.select.label}</span>
      <span className="background-text">HEADLINES</span>
      <span className="text-uppercase">
        {props.search.search ? " "+props.search.searchText :" "+ props.category}
      </span>
    </h1>
        {/* <h1 className="text-center mt-3"><span>{props.select.label}</span >HEADLINES-<span className="text-uppercase">{props.search.search?props.search.searchText:props.category}</span></h1> */}
        <InfiniteScroll
            dataLength={article.length} //This is important field to render the next data
            next={fetchData}
            hasMore={article.length!=totalresults}
            loader={<Spinner/>}>
            <div className="container my-3">
                <div className="row">
                    {article.map((element) => {
                        return <div className="col-md-4 my-2" key={element.url}>
                            <NewsItem title={element.title} description={element.description} newsUrl={element.url} imgurl={element.urlToImage} source={element.source.name} author={element.author} publishDate={element.publishedAt}/>
                        </div>
                    }
                    )}
                </div>
            </div>
        </InfiniteScroll>
    </>
    )
}
News.defaultProps = {
    pageSize: '6',
    category: 'general'
}