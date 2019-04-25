import React from 'react'

const Footer = function () {
    return (
        <div>
        <footer>
        <div className="footer__container">
          <div className="footer__box">
            <h4>About us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus facerewes molestias quisquam accusantium reiciendis.
            </p>
            <br />
            <p>
              1234 Street Name <br />
              Road Name <br />
              London <br />
              +44502912399
            </p>
          </div>
          <div className="footer__box">
            <h4>Latest Tweets</h4>
            <p>
              <span className="footer__span">@Jaynesh</span> Just submitted another
              great item on <span className="footer__span">#themeforest</span> about 3
              hours ago
            </p>
            <br />
            <p>
              <span className="footer__span">@Jaynesh</span> Working on an awesome
              theme for <span className="footer__span">#themeforest</span> about 3
              weeks ago
            </p>
          </div>
          <div className="footer__box">
            <h4>Latest Posts</h4>
            <p>Lorem ipsum dolor sit, amet consectetur.</p>
            <hr />
            <p className="blue">
              Corporis alias quidem cum illo ut.
            </p>
            <hr />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <hr />
            <p>Quas, itaque sint. Ad praesentium recusan</p>
          </div>
          <div className="footer__box">
            <h4>Flickr</h4>
            <div className="footer__box-container">
              <div className="footer__row">
                <div className="black-box"></div>
                <div className="black-box"></div>
                <div className="black-box"></div>
                <div className="black-box"></div>
              </div>
              
              <div className="footer__row">
                <div className="black-box"></div>
                <div className="black-box"></div>
                <div className="black-box"></div>
                <div className="black-box"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>
    )
}

export default Footer