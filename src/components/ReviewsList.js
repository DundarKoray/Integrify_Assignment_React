import React from 'react'
import reviewsData from '../data/reviewsData'
import Reviews from './Reviews'
import CallToAction from './CallToAction'
import Title from './Title'
    const ReviewsList = function () {
        const reviewsList = reviewsData.map(element => {
            return <Reviews review={element}/>
        })
        return (
            <section className='progress'>
            <Title title="Testimonials"/>
                <div className="progress__container">
                    
                        <div className="container">
                            {reviewsList}
                        </div>
                    
                </div>
                <div className="container">
                    <CallToAction message='Create a Powerful Solution Now'/>
                </div>
            </section>
        )
    }

export default ReviewsList