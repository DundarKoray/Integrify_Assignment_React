import React from 'react'

import Header from './Header'

import RecentWorksList from './RecentWorksList'
import ReviewsList from './ReviewsList'
import Footer from './Footer'
import FeatureList from './FeatureList';




const App = function () {
   
    return (
        <div>
            <Header/>
            <FeatureList/>
            <RecentWorksList/>
            <ReviewsList/>
            <Footer/>
        </div>
    )
}

export default App