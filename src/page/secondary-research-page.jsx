import React from 'react'
import Research from '../component/Research'
import WhatWeOfferGrid from '../component/WhatWeOfferGrid'
import Casestudy from '../component/casestudy'
import Countingblock from '../component/countingblock'
import IndustryBlock from '../component/IndustryBlock'
import FaqBlock from '../component/FaqBlock'
const SecondaryResearch = () => {
  return (
    <div className="secondary-research-page">
      <Research/>
      <WhatWeOfferGrid/>
      <Casestudy/>
      <Countingblock/>
      <IndustryBlock/>
      <FaqBlock/>
    </div>
  )
}

export default SecondaryResearch