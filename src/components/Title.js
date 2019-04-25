import React from 'react'

const Title = function (props) {
    return (
      <section className="section-title">
        <div className="wrapper">
          <div className="border">
            <hr className="myhr myhr--dark" />
          </div>
          <div className="title">
            <h3>{props.title}</h3>
          </div>
          <div className="border">
            <hr className="myhr myhr--dark" />
          </div>
        </div>
      </section>
    )
}

export default Title