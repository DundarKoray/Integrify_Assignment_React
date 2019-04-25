import React from 'react'
import featureData from '../data/featuredata'
import Feature from './Feature'

    const FeatureList = function () {
        const featureList = featureData.map(element => {
        return <Feature feature={element}/> 
    })
    return (  
        <section className="features">
            <div className="containers">
                {featureList}
            </div>
        </section>
    )
}

export default FeatureList