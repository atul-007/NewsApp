import React from 'react'
export default function NewsItem(props) {
    return (
        <>
            <div className="container ">
                <div className="card" >
                <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0',
                        top: '-10px'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {props.source} </span>
                    </div>
                    <img style={{height:"200px",width:"auto"}} src={props.imgurl?props.imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019"} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title?props.title.slice(0,70)+"...":"Title Not Available"}</h5>
                        <p className="card-text"><small className="text-muted">By {!props.author ? "Unknown" : props.author} on  {new Date(props.publishDate).toGMTString()}</small></p>
                        <p className="card-text">{props.description?props.description.slice(0,150)+"...":"description not available"}</p>
                        <a href={props.newsUrl} target='_blank' className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        </>
    )
}