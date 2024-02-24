import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://live-production.wcms.abc-cdn.net.au/9ad3a548942c2aa420ef976727054e08?impolicy=wcms_crop_resize&cropH=1152&cropW=2048&xPos=0&yPos=174&width=862&height=485&imformat=generic" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem