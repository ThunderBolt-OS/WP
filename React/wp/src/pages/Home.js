import React from 'react'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/about">AboutUs</Link>
          </li>
        </ul>

      </nav>
    </>
  )
}

export default Home