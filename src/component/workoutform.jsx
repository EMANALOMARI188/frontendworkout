import React, { useState } from 'react'
import ax from 'axios'
const  Workoutform=({show,setshow})=> {
  const [title,settitle]=useState('')
  const [load,setload]=useState('')
  const [reps,setreps]=useState('')
  const [error,seterror]=useState('')

  const handelSubmet=async(e)=>{
    e.preventDefault()
    try {
      const response=await ax.post('https://backendworkout-piu9.onrender.com/api/workouts/',
      {title,load,reps})
      setshow(!show)
      settitle('')
      setload('')
      setreps('')
      seterror('')
      
    } catch (error) {
      seterror('please fill out all field')
    }

  }
  return (
    <form className='create' onSubmit={handelSubmet}>
      <h3> add new workout</h3>
      <label>excersize title</label>
      <input type="text" 
      onChange={(e)=>settitle(e.target.value)}
      value={title}/>

      <label>load(in kg)</label>
      <input type="text" onChange={(e)=>setload(e.target.value)}
      value={load}/>

      <label>reps</label>
      <input type="text" 
      onChange={(e)=>setreps(e.target.value)}
      value={reps}/>

      <button>Add workout</button>

      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Workoutform