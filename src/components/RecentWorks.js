import React from 'react'

const RecentWorks = function (props) {

    const {image, title, content} = props.recentWork

    return (
      <div className="container__a">
          <div className="placeholder-container">
            <img
              className="placeholder-pic"
              src={image}
              alt=""
            />
          </div>
          <div className="blog-container">
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
      </div>
    );
}

export default RecentWorks