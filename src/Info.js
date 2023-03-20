import React from 'react'
import './Info.css'
const name="Dheeraj Singh";
const Uid="123";
const Mb="9759668357";
const Email="Dheerajsingh76@gmail.com";

export default function Info() {
  return (
    <div>
        <form className='f1'>
        <label>Enter the name</label>
        <input type={name}></input>
        <label>Enter the User ID</label>
        <input type={Uid}></input>
        <label>Enter the Mobile Number</label>
        <input type={Mb}></input>
        <label>Enter the Email</label>
        <input type={Email}></input>

        </form>
        <h1>hello dheeraj</h1>
       
    </div>
  )
}
