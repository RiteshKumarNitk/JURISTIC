import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"
import { SampleCard } from "./SampleCard"
import TeamSection12 from "./TeamSection12"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          {/* <Heading title='Featured Property Types' subtitle='Find All Type of Property.' /> */}
          {/* <FeaturedCard /> */}
          <TeamSection12/>
          {/* <SampleCard /> */}
          
        </div>
      </section>
    </>
  )
}

export default Featured
