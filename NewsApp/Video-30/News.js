import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general'
      }

      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
      }

    constructor(){
        super();
        console.log("Hello I am a constructor from news component");
        this.state={
            articles :  [],
            loading : false,
            page:1
        }
    }
    async componentDidMount(){
        // console.log("cdm"); 1st constructor will run --> render --> componentDidMount
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a34badeede084036a91101a1dd77dce2&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})

    }

    handlePrevClick = async ()=>{
        console.log("Previous")

        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a34badeede084036a91101a1dd77dce2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async ()=>{
        // console.log("Next", this.state.page + 1,this.state.totalResults/20);
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
            // console.log("Do nothing")
        }else{
            
            let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a34badeede084036a91101a1dd77dce2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading : true});
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }
    
  render() {
    // console.log("render");
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:'35px 0px'}} >News Monkey- Top Headlines</h1>
        {this.state.loading &&  <Spinner/>}
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
          <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem  title = {element.title? element.title.slice(0,45):""} description={element.description? element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>            
                })}
         </div>
         <div className="container d-flex justify-content-between">
         <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
         </div>
      </div>
    )
  }
}



export default News