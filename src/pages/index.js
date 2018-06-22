import React from 'react'
import Link from 'gatsby-link'
import Home from '../components/home'
import News from '../components/news'

const IndexPage = () => (
  <div>
    <div className="home-container">
      <Home />
      <News />
    </div>
    {/* <h1>Rafał Rudol</h1>
    <p>Personal Website</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

export default IndexPage
