import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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

      capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        console.log("Hello I am a constructor from news component");
        this.state={
            articles :  [],
            loading : true,
            page:1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`;
    }

    async updateNews (){
        const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a34badeede084036a91101a1dd77dce2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount(){
        // // console.log("cdm"); 1st constructor will run --> render --> componentDidMount
        // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a34badeede084036a91101a1dd77dce2&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading : true});
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
        this.updateNews();

    }


    handlePrevClick = async ()=>{

      this.setState({page: this.state.page-1})
      this.updateNews();
    }

    handleNextClick = async ()=>{

        this.setState({page: this.state.page+1});
        this.updateNews();
    }

    // fetchMoreData = async() => {
    //   this.setState({page: this.state.page+ 1})
    //   const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a34badeede084036a91101a1dd77dce2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading : true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json()
    //   this.setState({
    //     articles: this.state.articles.concat(parsedData.articles),
    //     totalResults: parsedData.totalResults,
    //     loading: false
    //   })
    // };

    fetchMoreData = async () => {
      const nextPage = this.state.page + 1;
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a34badeede084036a91101a1dd77dce2&page=${nextPage}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState((prevState) => ({
          articles: this.state.articles.concat(parsedData.articles),
          totalResults: parsedData.totalResults,
          page: nextPage,
      }));
  };
  
    
  render() {
    // console.log("render");
    return (
      <>
        <h1 className='text-center' style={{margin:'35px 0px'}} >News Monkey- Top Headlines {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading &&  <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >

        <div className="container">
          <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem  title = {element.title? element.title.slice(0,45):""} description={element.description? element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author ={element.author} date = {element.publishedAt} source={element.source.name}/>
                </div>            
                })}
         </div>
        </div>
        </InfiniteScroll>

      </>
    )
  }
}



export default News