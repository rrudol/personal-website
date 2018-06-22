import React from 'react'
import Link from 'gatsby-link'

const News = ({ siteTitle }) => (
  <div className="home-news">
    <h3>News</h3>
    <div className="home-news-container">
      <div className="home-news-box">
        <a href="http://bit.ly/npr-monitor">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2000px-Node.js_logo_2015.svg.png" />
          <p>Implementation of Distributed Monitor in Node.js</p>
        </a>
      </div>

      <div className="home-news-box">
        <a href="http://calm.conejito.pl">
          <img src="https://images.unsplash.com/photo-1424643251207-ddb7094d2f10?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f4de66c92c1dc08f6de48ce67d991094&auto=format&fit=crop&w=200&q=80" />
          <p>PoC of Relaxing App</p>
        </a>
      </div>

      <div className="home-news-box">
        <a href="http://akai.org.pl">
          <img src="https://akai.org.pl/wp-content/themes/akai-new/images/logo.svg" />
          <p>AKAI</p>
        </a>
      </div>
    </div>

  </div>
)

export default News
