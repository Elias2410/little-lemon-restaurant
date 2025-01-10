import UserFeedbackCard from './UserFeedbackCard'

const Testimonials = () => {

  return (
    <section className='TestimonialsSectionContainer'>
      <h1 style={{fontFamily:'Markazi Text'}}>Testimonials</h1>
      <div className='UsersCardsContainer'>
        <UserFeedbackCard stars="3" userfeedback="It was okay—nothing extraordinary. The seasoning was a bit bland for my taste, but it was well-cooked." />
        <UserFeedbackCard stars="5" userfeedback="Absolutely amazing! The flavors were perfectly balanced, and the presentation was stunning. I'll definitely be back!" />
        <UserFeedbackCard stars="4" userfeedback="The dish was delicious, and the portion size was generous. I just wish it had been served a bit hotter." />
        <UserFeedbackCard stars="2" userfeedback="Disappointing. The dish was cold when it arrived, and the flavors were lacking. Not worth the price." />
      </div>
    </section>
  )
}

export default Testimonials