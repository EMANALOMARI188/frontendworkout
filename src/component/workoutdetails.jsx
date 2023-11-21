import React from 'react'
import formatDistanceToNo from 'date-fns/formatDistanceToNow'
import ax from 'axios'
const Workoutdetails=({workout,show,setshow})=> {

  const handelDelete=async()=>{
    await ax.delete('https://backendworkout-piu9.onrender.com/api/workouts/' +workout._id)
    setshow(!show)

  }
  return (
    <div className='workout-details'>
      <h4> {workout.title} </h4>
      <p>  <strong>load (Kg):</strong>{workout.load} </p>
      <p>  <strong>number of reps :</strong>{workout.reps} </p>
      <p>{formatDistanceToNo (new Date(workout.createdAt),{addsuffix:true})}</p>
      <span class="material-symbols-outlined" onClick={handelDelete}>delete</span>

    </div>
  )
}

export default Workoutdetails