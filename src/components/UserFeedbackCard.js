import React from 'react'

const UserFeedbackCard = (props) => {
  return (
    <div className='container'>
        <img src={props.userrating}/>
        <img src={props.userimage}/>
        <h2>{props.username}</h2>
        <p>{props.userfeedback}</p>
    </div>
  )
}

export default UserFeedbackCard