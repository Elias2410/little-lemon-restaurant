import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useState } from 'react'
import axios from "axios"

const UserFeedbackCard = (props) => {

  const [users,setUsers]=useState([])
  useEffect(()=>{
    const fetshUsers = async()=>{
      try{
        const responce = await axios.get("https://randomuser.me/api/?results=1")
        setUsers(responce.data.results)
      }
      catch(error){
        console.log("Error fetching random user:",error)
      }
    }

    fetshUsers();
  },[])

  return (
    <div className='UserFeedbackCardContainer'>
        <div className='StarsContainer'>
          {Array(5).fill().map((_,index)=>
            <FontAwesomeIcon style={{color:"gold"}} key={index} icon={
              index < props.stars ? solidStar: regularStar
            }/>
          )}
        </div>
        <div>
          {users.map((user,index)=>(
            <div>
              <div className='UserFeedbackCardImgAndComment'>
                <img key={index} style={{borderRadius:"100%"}} src={user.picture.thumbnail}/>
                <p style={{fontWeight:"bold"}}>{user.name.first} {user.name.last}</p>
              </div>
            </div>
          ))}
        </div>
        <p id='UserFeedbackCardUserName'>{props.userfeedback}</p>
    </div>
  )
}

export default UserFeedbackCard