import React from 'react'

const Reviews = function (props) {

    const {title, content} = props.review

    return ( 
              <div className="testimonial">
                <h3>{title}</h3>
                <p>{content}</p>
              </div>
    )
}

export default Reviews