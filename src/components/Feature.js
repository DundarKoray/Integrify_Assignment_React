import React from 'react'

const Feature = function (props) {
    // console.log(props);
    const {icon, titleBold, titleNormal, content, buttonText} = props.feature
    
    return (
              <div className="feature">
                 <div className="icon"><i className ={icon}></i></div>
                 <h3><b>{titleBold}</b><span className="feature__span">{titleNormal}</span></h3>
                 <p>{content}</p>
                 <a className="button-features" href="#">{buttonText}</a>
              </div>     
    )
}


export default Feature