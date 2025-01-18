import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const UserFeedbackCard = ({ stars, userfeedback, user }) => {
  return (
    <div className='UserFeedbackCardContainer'>
      <div className='StarsContainer'>
        {Array(5).fill().map((_, index) => (
          <FontAwesomeIcon
            style={{ color: "gold" }}
            key={index}
            icon={index < stars ? solidStar : regularStar}
          />
        ))}
      </div>
       {user && (
              <div className='UserFeedbackCardImgAndComment'>
                  <img style={{borderRadius:"100%"}} src={user.picture.thumbnail} alt="User thumbnail"/>
                <p style={{fontWeight:"bold"}}>{user.name.first} {user.name.last}</p>
              </div>
       )}
      <p id='UserFeedbackCardUserComment'>{userfeedback}</p>
    </div>
  );
};

export default UserFeedbackCard;