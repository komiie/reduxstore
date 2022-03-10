
import React from 'react'
import { selectStudentName, updateStudentName } from './studentHelper';
import {useSelector, useDispatch} from "react-redux"
import {useState} from "react"


export default function Students() {

  const studentName = useSelector(selectStudentName)
  const dispatch = useDispatch();
  const [usrInput, setInput] = useState("");
  //render()
  return(
      <div>
          <h1>{studentName} </h1> 
          <input value = {usrInput} onChange={(e) => setInput(e.target.value)} />
          <button onClick={() => dispatch(updateStudentName(usrInput))}></button>
      </div>
  )};

