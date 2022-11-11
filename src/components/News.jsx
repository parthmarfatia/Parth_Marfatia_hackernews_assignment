import React from "react";

function News(props) {
  const news = props.data;
  const arrayNews = news.map((article) => {
    const { author, points, title, url, created_at, objectID } = article;
    const time = created_at.split("T")[0];
    const parsedUrl = url !== null ? url.split("/")[2] : "";

    return (
      <div key={objectID} className="px-2">
        <div>
          {title} &nbsp;
          <span className="text-blue-600">
            <a href={url} target="_blank">
              {parsedUrl}
            </a>
          </span>
        </div>
        <div className="text-sm text-slate-800 py-2">
          {points} points | {author} | {time}
        </div>
        <hr></hr>
      </div>
    );
  });
  return <div>{arrayNews}</div>;
}

export default News;
