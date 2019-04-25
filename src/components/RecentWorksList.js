import React from 'react'
import recentWorksData from '../data/recentWorkData'
import RecentWorks from './RecentWorks'
import Title from './Title'
    const RecentWorksList = function () {
            const recentWorksList = recentWorksData.map(element => {
            return <RecentWorks recentWork={element}/>
        })
        return (
          <section className="portfolio">
          <Title title='Recent Work'/>
            <div className="containers">{recentWorksList}</div>
          </section>
        )
    }

    export default RecentWorksList