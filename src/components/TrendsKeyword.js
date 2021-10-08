import React from "react";

const TrendsKeyword = () => {
  const [state, setState] = React.useState([
    {
      id: 1,
      country: "Trend in India",
      Trending: "Trending : #RCBvDC",
      News:" RCB beats DC by 7 Wickets with finish of last ball six ",
      totalKeywords: "7000k",
    },
    {
      id: 2,
      country: "Trend in India ",
      Trending: "Trending : #MIvSRH", 
      News:" MI at strong Knock of 236 Runs but fails to qualify to play-offs",
      totalKeywords: "6000k",
    },
    {
      id: 3,
      country: "Trend in India",
      Trending: "Trending : Air India",
      News:"Tata Sons bid to acquire Air India,its grand welcome after 67 Years",
      totalKeywords: "9000k",
    }
  ]);
  return (
    <div className="keywords">
      <div className="key">
        <div className="keyword__heading">
          <h4>Trends for you</h4>
        </div>
        {state.map((keyword) => (
          <div key={keyword.id}>
            <div className="country">{keyword.country}</div>
            <div className="keyword__name">
              <strong>{keyword.Trending}</strong>
              <strong>{keyword.News}</strong>
            </div>
            <div className="keyword__tweets">{keyword.totalKeywords}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendsKeyword;