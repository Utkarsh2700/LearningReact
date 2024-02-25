import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        console.log("Hello I am a constructor from news component");
        this.state={
            articles :  [],
            loading : false
        }
    }
    async componentDidMount(){
        // console.log("cdm"); 1st constructor will run --> render --> componentDidMount
        let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=a34badeede084036a91101a1dd77dce2";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles})

    }

  render() {
    // console.log("render");
    return (
      <div className='container my-3'>
        <h1>News Monkey- Top Headlines</h1>
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
          <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem  title = {element.title? element.title.slice(0,45):""} description={element.description? element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>            
                })}
         </div>
      </div>
    )
  }
}

export default News