import React from 'react'
import FindDoctorSection from '../features/Home/FindDoctorSection'
import Clientbar from '../features/Home/Clientbar'
import Explore from '../features/Home/Explore'
import Introbanner from '../features/Home/Introbanner'
import DoctorInfo from '../features/Home/DoctorInfo'
const Home = () => {
  return (
    <>
    <FindDoctorSection/>
    <Clientbar/>
    <Explore/>
    <Introbanner/>
    <DoctorInfo/>
    </>
  )
}

export default Home