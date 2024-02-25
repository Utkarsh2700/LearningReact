import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [{"source":{"id":"abc-news-au","name":"ABC News (AU)"},"author":"Lily Thomson","title":"Former players inspire Tasmanian Tigers women's cricket team ahead of WCNL final against Queensland","description":"The Tasmanian Tigers women's team is hoping to secure its third straight title when it plays Queensland in the WNCL final this weekend. To boost their chances, players are drawing on the experiences and encouragement of team stalwarts.","url":"https://www.abc.net.au/news/2024-02-23/tas-womens-cricket-champs-connect-with-previous-players/103492658","urlToImage":"https://live-production.wcms.abc-cdn.net.au/9ad3a548942c2aa420ef976727054e08?impolicy=wcms_crop_resize&cropH=1152&cropW=2048&xPos=0&yPos=174&width=862&height=485&imformat=generic","publishedAt":"2024-02-22T19:00:17Z","content":"<ul><li>In short: The Tasmanian women's cricket team has been reconnecting with past players for inspiration ahead of this weekend's final in the Women's National Cricket League.</li><li>Two women wh… [+4753 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com","description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z","content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com","description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"}]

    constructor(){
        super();
        console.log("Hello I am a constructor from news component");
        this.state={
            articles :  this.articles,
            loading : false
        }
    }

  render() {
    return (
      <div className='container my-3'>
        <h2>News Monkey- Top Headlines</h2>
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
          <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem  title = {element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>            
                })}
         </div>
      </div>
    )
  }
}

export default News