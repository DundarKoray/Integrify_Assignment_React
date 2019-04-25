import React from 'react'

const CallToAction = function (props) {
    return (
       
        <div className="cta">
          <h2>{props.message}</h2>
          <a className="button button--cta" href="#">Contact Us</a>
       
      </div>
    )
}

export default CallToAction
