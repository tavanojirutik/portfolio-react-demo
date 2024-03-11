import React from 'react'
import "./work.css"
import Works from './Works'

export const Work = () => {
  return (
    <section className='worl section' id='portfolio'>
        <h2 className="section__title">Portfolio</h2>
        <span className='section__subtitle'>Most Recent Works</span>

        <Works/>
    </section>
  )
}
