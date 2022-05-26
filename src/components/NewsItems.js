import React, { Component } from 'react'

export class NewsItems extends Component {
 
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger ">{source}</span>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="textmuted">by {author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
            </div>
    </div>
    </div>
    )
  }
} 

export default NewsItems