 
import React, { useState, useEffect } from "react";
 import "./AppleNews.css";

export default function AppleNews() {
  const [AppleNews, setApples] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-09-30&pageSize=6&sortBy=popularity&apiKey=af0af615fefe45c4bfe3b7f596da84ab"
    )
      .then((response) => response.json())
      .then((AppleNews) => {
        setApples`(AppleNews.articles)`;
      });
    
  }, []);
  console.log(AppleNews);
  
  return (
    <div className="allNewsWrapper">
      <div class="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold news-title-wrapper">
              Latest Apple News
            </div>
          </div>

          {AppleNews.map((singleNews, i) => {
            let Title = singleNews.title;
            let Image = singleNews.urlToImage;
            let Description = singleNews.description;
            let Links = singleNews.url;
            let newswrapper = (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleNewsWrapper">
                  <div className="newsInfoWrapper">
                    <div className="newsTitle">
                      <a href={Links} Target="_blank">
                        {Title}
                      </a>
                    </div>
                    <div className="newsImage">
                      <a href={Links} Target="_blank">
                        <img src={Image} alt="" />
                      </a>
                    </div>
                    <div className="newsDescription">{Description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return newswrapper;
          })}
        </div>
      </div>
    </div>
  );
}
