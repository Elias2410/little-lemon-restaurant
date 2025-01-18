import React, { useEffect, useState } from 'react';
import UserFeedbackCard from './UserFeedbackCard';
import axios from "axios";

const Testimonials = () => {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(
              "https://randomuser.me/api/?results=4"
            );
            setUsers(response.data.results);
          } catch (error) {
            console.log("Error fetching random user:", error);
          }
        };

        fetchUsers();
      }, []);


  const testimonialsData = [
    {
        stars: "3",
        userfeedback:
          "It was okay—nothing extraordinary. The seasoning was a bit bland for my taste, but it was well-cooked.",
      },
      {
        stars: "5",
        userfeedback:
          "Absolutely amazing! The flavors were perfectly balanced, and the presentation was stunning. I'll definitely be back!",
      },
      {
        stars: "4",
        userfeedback:
          "The dish was delicious, and the portion size was generous. I just wish it had been served a bit hotter.",
      },
      {
        stars: "2",
        userfeedback:
          "Disappointing. The dish was cold when it arrived, and the flavors were lacking. Not worth the price.",
      },
  ];


    return (
    <section className='TestimonialsSectionContainer'>
      <h1 style={{ fontFamily: 'Markazi Text' }}>Testimonials</h1>
      <div className='UsersCardsContainer'>
        {testimonialsData.map((testimonial, index) => (
           <UserFeedbackCard
           key={index}
              stars={testimonial.stars}
              userfeedback={testimonial.userfeedback}
              user={users[index]}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;