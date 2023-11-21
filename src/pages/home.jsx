import React, { useEffect, useState } from 'react'
import ax from 'axios'
import Workoutdetails from '../component/workoutdetails'
import Workoutform from '../component/workoutform'


function Home() {
  const [workouts,setwprkouts]=useState([])

  const [show,setshow]=useState(false)

  useEffect(()=>{//هاي عشان ما يعطيني انفنت لوب
  const getdata=async()=>{
    const res=await ax.get('https://backendworkout-piu9.onrender.com/api/workouts')
    console.log(res.data)
    setwprkouts(res.data)
  }
  getdata()
  },[show])


  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((work)=>(
        <Workoutdetails workout={work} show={show} setshow={setshow} key={work._id}/>))}
      </div>
      <Workoutform show={show} setshow={setshow}/>
      </div>
  )
}
 
export default Home