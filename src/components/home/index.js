import React from 'react'
import Link from 'gatsby-link'

const Home = ({ siteTitle }) => (
    <div className="home-welcome">
      <h1>Rafał Rudol</h1>
      <h2>
        JavaScript Developer <i className="fab fa-js" />
      </h2>
      <hr />
      <p>
        {' '}
        Student of Distributed Systems 🛰, <br />
        who tries to use JavaScript in everything 👨🏻‍💻 <br />
        enjoys taking photos 📷 and watching stars 🔭.
      </p>
      <hr />

      <p>
        <span>Check out my </span>
        <a href="https://github.com/rrudol">projects</a> and
        <a href="https://www.instagram.com/rafalrudol/">photos</a>.
      </p>

      <p>
        {' '}
        Find me on:
        <a href="https://github.com/rrudol">
          <i className="fab fa-github-square" />
        </a>
        <a href="https://www.linkedin.com/in/rudol/">
          <i className="fab fa-linkedin" />
        </a>
        <a href="https://twitter.com/Rafal_Rudol">
          <i className="fab fa-twitter-square" />
        </a>
      </p>

      <hr />

      <p>
        <q>Less is more</q>
      </p>
    </div>
)

export default Home
