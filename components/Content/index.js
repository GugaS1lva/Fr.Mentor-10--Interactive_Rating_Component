import React from 'react'
import Cards from './Cards'
import ProfileCard from './ProfileCard'

const Content = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      <ProfileCard />
      <Cards />
    </div>
  )
}

export default Content